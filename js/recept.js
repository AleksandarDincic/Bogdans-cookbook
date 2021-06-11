let recipes = localStorage.getItem("recipes");
recipes = recipes == null ? data : JSON.parse(recipes);

$(document).ready(function(){
    params = new URLSearchParams(window.location.search);
    if(!params.has("id"))
        window.location.href = "index.html";
    let currRecipes = recipes.filter(element => element["id"] == params.get("id"));
    if(currRecipes.length == 0 )
        window.location.href = "index.html";
    $("#rName").html(currRecipes[0]["name"]);
});