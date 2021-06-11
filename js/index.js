$(document).ready(function () {
    getTop3Recipes();
});

function getTop3Recipes() {
    let recipes = [];
    let storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes == null) {
        recipes = data;
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }
    else {
        recipes = JSON.parse(storedRecipes);
    }

    recipes.sort((e1, e2) => {
        let avg1 = getAvg(e1);

        let avg2 = getAvg(e2);

        return -(avg1 - avg2);
    });

    for (let i = 0; i < recipes.length && i < 3; ++i) {
        appendRecipeCard(recipes[i], "RS");
    }
}