$(document).ready(function () {
    initPageContent();
    $("#btn-delete").click(deleteRecipe);
});

function initPageContent() {
    $("#recipes-col").html("");
    $("#ratings-col").html("");
    $("#comment-col").html("");
    getUserRecipes();
    getUserRatings();
    getUserComments();
}

function getRecipes() {
    let recipes = [];
    let storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes == null) {
        recipes = data;
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }
    else {
        recipes = JSON.parse(storedRecipes);
    }

    return recipes;
}

function getUserRecipes() {
    let recipes = getRecipes();

    let myRecipes = recipes.filter(e => e.author == 0);

    for (let i = 0; i < myRecipes.length; ++i) {
        appendRecipeCard(myRecipes[i], "RS", "user");
    }
}

function getUserRatings() {
    let recipes = getRecipes();

    let ratedRecipes = recipes.filter(e => e.grade.some(ee => ee.userID == 0));

    for (let i = 0; i < ratedRecipes.length; ++i) {
        appendRecipeCard(ratedRecipes[i], "RS", "rating");
    }
}

function getUserComments() {
    let recipes = getRecipes();

    let commentedRecipes = recipes.filter(e => e.comments.some(ee => ee.userID == 0));
    console.log(commentedRecipes.length);
    commentedRecipes.forEach(e => {
        let userComments = e.comments.filter(ee => ee.userID == 0);
        userComments.forEach(ee => appendComment(ee, e.name));
    });
}

function deleteRecipe() {
    let id = $("#deleteModal").attr("data-recipe");

    if (id != -1) {
        let recipes = getRecipes();
        recipes = recipes.filter(e => e.id != id);

        localStorage.setItem("recipes", JSON.stringify(recipes));

        initPageContent();
    }

    $("#deleteModal").modal('hide');
}