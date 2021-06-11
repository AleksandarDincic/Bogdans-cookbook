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
}

function sortRecipes(recipes, sortBy)
{
    switch(sortBy)
    {
        case 0:
            recipes.sort((element1, element2) =>{
                let tmpBr1 = 0;
                let tmpBr2 = 0;
                element1["grade"].forEach(element =>{ tmpBr1 += element["grade"]});
                tmpBr1 /= element1["grade"].length;
                element2["grade"].forEach(element =>{ tmpBr2 += element["grade"]});
                tmpBr2 /= element2["grade"].length;
                return tmpBr2 - tmpBr1;
            });
        break;
        case 1:
            recipes.sort((element1, element2) => element2["difficulty"] - element1["difficulty"]);
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
    let currRecipes = recipes.filter(element=> element["type"] == type);
    sortRecipes(currRecipes, sortBy);
    displayContent(currRecipes, type, pageNum);

    $("#allBack").click(function(){
        pageNum = 1;
        $("#recipes-col").html("");
        $("#curr").html(pageNum);
        displayContent(currRecipes, type, pageNum);
    });
    $("#back").click(function(){
        pageNum = (pageNum - 1) > 0 ? (pageNum - 1) : pageNum;
        $("#recipes-col").html("");
        $("#curr").html(pageNum);
        displayContent(currRecipes, type, pageNum);
    });
    $("#next").click(function(){
        pageNum = (pageNum + 1) <= Math.ceil(currRecipes.length/numberPerPage) ? (pageNum + 1) : pageNum;
        $("#recipes-col").html("");
        $("#curr").html(pageNum);
        displayContent(currRecipes, type, pageNum);
    });
    $("#allNext").click(function(){
        pageNum = Math.ceil(currRecipes.length/numberPerPage);
        $("#recipes-col").html("");
        $("#curr").html(pageNum);
        displayContent(currRecipes, type, pageNum);
    });

    $("select").change(function(){
        sortBy = parseInt($(this).val());
        sortRecipes(currRecipes, sortBy);
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });
});