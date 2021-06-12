let recipes = localStorage.getItem("recipes");
recipes = recipes == null ? data : JSON.parse(recipes);

function addComments(currRecipes)
{
    $("#comment-col").html("");
    for(let i = 0; i < currRecipes[0]["comments"].length; i++)
    {
        let comment = currRecipes[0]["comments"][i];
        appendComment(comment);
    }
}

$(document).ready(function(){
    params = new URLSearchParams(window.location.search);
    if(!params.has("id"))
        window.location.href = "index.html";

    let SRB = document.documentElement.lang == "rs";

    let currRecipes = recipes.filter(element => element["id"] == params.get("id"));
    if(SRB)
        document.title = "Bogdanov Kuvar - " +  currRecipes[0]["name"];
    else
        document.title = "Bogdan's Cookbook - " +  currRecipes[0]["name"];
    if(currRecipes.length == 0 )
        window.location.href = "index.html";
    $("#rName").html(currRecipes[0]["name"]);
    let user = getUserName(currRecipes[0]["author"]);
    let type = getRecipeType(currRecipes[0]["type"]);
    let avg = getAvg(currRecipes[0]);
    let timeLen = currRecipes[0]["time"];
    let dif = currRecipes[0]["difficulty"];
    if(SRB)
        $("#typeOfFood").html(type["nameSRB"]);
    else
        $("#typeOfFood").html(type["nameENG"]);
    $("#aut").html(user["name"]);
    $("#lengthOfTime").html(timeLen+"<i class='fas fa-clock'></i>");
    $("#grade").html(avg.toFixed(1)+"/5.0<i class='fas fa-star'>");
    $("#dif").html(dif+"/5<i class='fas fa-book-dead'></i>");
    $("#recipeData").text(currRecipes[0]["recipe"]);

    if(SRB)
        $(".breadcrumb").append("<li class='breadcrumb-item'><a href='recepti.html?type="+type["id"]+"' class='text-muted'>" + type["nameSRBP"] + "</a></li>");
    else
        $(".breadcrumb").append("<li class='breadcrumb-item'><a href='recepti_en.html?type="+type["id"]+"' class='text-muted'>" + type["nameENG"] + "s</a></li>");
    $(".breadcrumb").append("<li class='breadcrumb-item active'><a href='#' class='text-body'>" + currRecipes[0]["name"] + "</a></li>");

    let videoLink = currRecipes[0]["videoLinks"];
    if(videoLink == "")
        $("#videoRow").css("display","none");
    else
        $("#video").attr("src",videoLink);

    if(currRecipes[0]["imageLinks"].length != 0)
    {
        for(let i = 0; i < currRecipes[0]["imageLinks"].length; i++)
        {
            let div = $("<div class='carousel-item'></div>");
            let img = $("<img src='"+currRecipes[0]["imageLinks"][i]+"' class='d-block slideshow-img'>");
            div.append(img);
            $(".carousel-inner").append(div);
            if(i == 0)
                div.addClass("active");
        }
    }
    else
    {
        let noImg = $("<div class='carousel-item active'><img src='../img/no-img.png' class='d-block slideshow-img'></div>");
        $(".carousel-inner").append(noImg);
    }
    addComments(currRecipes);
    for(let i = 0; i < currRecipes[0]["grade"].length; i++)
    {
        if(currRecipes[0]["grade"][i]["userID"] == 0)
        {
            $("#selectedGrade").val(currRecipes[0]["grade"][i]["grade"]);
            break;
        }
    }

    $("#gradeB").click(function(){
        let flag = false;
        let i;
        for(i = 0; i < currRecipes[0]["grade"].length; i++)
        {
            if(currRecipes[0]["grade"][i]["userID"] == 0)
            {
                flag = true;
                break;
            }
        }
        if(flag)
        {
            currRecipes[0]["grade"][i]["grade"] = parseInt($("#selectedGrade").val());
        }
        else
        {
            let newGrade = {
                userID: 0,
                grade: parseInt($("#selectedGrade").val())
            };
            currRecipes[0]["grade"].push(newGrade);
        }
        avg = getAvg(currRecipes[0]);
        $("#grade").html(avg.toFixed(1)+"/5.0<i class='fas fa-star'>");
        localStorage.setItem("recipes",JSON.stringify(recipes));
    });

    $("#commentB").click(function(){
        let userId = 0;
        const currDate = new Date();
        let date = currDate.getDay() + "/" + (currDate.getMonth() + 1) + "/" + currDate.getFullYear();
        let textData = $("#comment").val();
        let comment ={
            userID: userId,
            text: textData,
            date: date
        };
        currRecipes[0]["comments"].splice(0, 0, comment);
        addComments(currRecipes);
        localStorage.setItem("recipes",JSON.stringify(recipes));
    });

    $("#getPDF").click(function(){ 
        var pdf = new jsPDF('p', 'pt', 'letter');
        source = document.getElementById("pdf");
        specialElementHandlers = {
            '#bypassme1': function (element, renderer) {
                return true
            },
            '#bypassme2': function (element, renderer) {
                return true
            },
            '#bypassme3': function (element, renderer) {
                return true
            },
            '#bypassme4': function (element, renderer) {
                return true
            }
        };
        margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };
        pdf.fromHTML(
            source, 
            margins.left, 
            margins.top, {
                'width': margins.width,
                'elementHandlers': specialElementHandlers
            },
            function (dispose) {
                pdf.save(currRecipes[0]["name"]);
            }, margins
        );
    });
});