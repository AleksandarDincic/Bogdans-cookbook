let recipes = localStorage.getItem("recipes");
recipes = recipes == null ? data : JSON.parse(recipes);
const numberPerPage = 5;

function displayContent(recipes, type, pageNum)
{
    let displayNumber = 0;
    recipes.forEach(element => {
        if(displayNumber < (numberPerPage * pageNum) && displayNumber >= (numberPerPage * (pageNum-1)))
            appendRecipeCard(element, "RS");
        displayNumber++;
    });
    $("#curr").html(pageNum);
}

function sortRecipes(recipes, sortBy)
{
    switch(sortBy)
    {
        case 0:
            recipes.sort((element1, element2) =>{
                return getAvg(element2) - getAvg(element1);
            });
        break;
        case 1:
            recipes.sort((element1, element2) => element1["difficulty"] - element2["difficulty"]);
        break;
    }
}

$(document).ready(function(){
    params = new URLSearchParams(window.location.search);
    if(!params.has("type"))
        window.location.href = "index.html";
    let type = params.get("type");
    let pageNum = 1;
    let sortBy = 0;
    let textFilter = "";
    let currRecipes = recipes.filter(element=>element["type"] == type && element["name"].includes(textFilter));
    $(".breadcrumb").append("<li class='breadcrumb-item active'><a href='#'>" + types[type]["nameSRBP"] + "</a></li>");
    sortRecipes(currRecipes, sortBy);
    displayContent(currRecipes, type, pageNum);

    $("#allBack").click(function(){
        pageNum = 1;
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });
    $("#back").click(function(){
        pageNum = (pageNum - 1) > 0 ? (pageNum - 1) : pageNum;
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });
    $("#next").click(function(){
        pageNum = (pageNum + 1) <= Math.ceil(currRecipes.length/numberPerPage) ? (pageNum + 1) : pageNum;
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });
    $("#allNext").click(function(){
        pageNum = Math.ceil(currRecipes.length/numberPerPage);
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });

    $("select").change(function(){
        sortBy = parseInt($(this).val());
        sortRecipes(currRecipes, sortBy);
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });

    $("#search").click(function(){
        textFilter = $("#searchText").val();
        currRecipes = recipes.filter(element=>element["type"] == type && element["name"].includes(textFilter));
        sortRecipes(currRecipes, sortBy);
        $("#recipes-col").html("");
        pageNum = 1;
        displayContent(currRecipes, type, pageNum);
    });
});