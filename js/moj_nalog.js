$(document).ready(function () {
    getTop3Recipes();
});


function getAvg(recipe) {
    let avg = 0;
    recipe.grade.forEach(e => {
        avg += e.grade;
    });
    if (recipe.grade.length != 0) {
        avg /= recipe.grade.length;
    }
    return avg;
}

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
        appendRecipeCard(recipes[i]);
        appendRatingCard(recipes[i]);
    }
}

function getRecipeType(typeID) {
    return types.find(e => e.id == typeID);
}

function getUserName(userID) {
    return users.find(e => e.id == userID);
}

function appendRecipeCard(recipe) {
    
    let card = $("<div></div>").addClass("card").addClass("mb-3").addClass("mt-3");
    
    let innerRow = $("<div></div>").addClass("row").addClass("no-gutters");
    card.append(innerRow);
    
    let imgCol = $("<div></div>").addClass("col-md-4");
    innerRow.append(imgCol);
    
    let img = $("<img></img>").addClass("card-img").addClass("recipe-img").attr("src", "img/chicken.jpg");
    imgCol.append(img);

    let bodyCol = $("<div></div>").addClass("col-md-8");
    innerRow.append(bodyCol);

    let cardBody = $("<div></div>").addClass("card-body");
    bodyCol.append(cardBody);

    let recipeLeft = $("<div></div>").addClass("recipe-left");
    cardBody.append(recipeLeft);

    let recipeName = $("<h1></h1>").addClass("card-title").html(recipe.name);
    let type = getRecipeType(recipe.type);
    let recipeType = $("<p></p>").addClass("card-text").addClass("text-muted").html(type.nameSRB);
    let removeButton = $("<button></button>").addClass("btn").addClass("btn-danger").html("Ukloni");
        
    recipeLeft.append(recipeName);
    recipeLeft.append(recipeType);
    recipeLeft.append(removeButton);

    let recipeRight = $("<div></div>").addClass("recipe-right");
    cardBody.append(recipeRight);

    let rating = $("<p></p>").addClass("card-text");
    let ratingIcon = $("<i></i>").addClass("fas").addClass("fa-star");
    let avg = getAvg(recipe);
    rating.append(avg.toFixed(1) + "/5.0" + "&nbsp;&nbsp;");
    rating.append(ratingIcon);
    recipeRight.append(rating);

    let time = $("<p></p>").addClass("card-text");
    let timeIcon = $("<i></i>").addClass("fas").addClass("fa-clock");
    time.append(recipe.time + "&nbsp;&nbsp;");
    time.append(timeIcon);
    recipeRight.append(time);

    let difficulty = $("<p></p>").addClass("card-text");
    let diffIcon = $("<i></i>").addClass("fas").addClass("fa-book-dead");
    difficulty.append(recipe.difficulty + "/5" + "&nbsp;&nbsp;");
    difficulty.append(diffIcon);
    recipeRight.append(difficulty);

    $("#recipes-col").append(card);
}

function appendRatingCard(recipe) {
    let card = $("<div></div>").addClass("card").addClass("mb-3").addClass("mt-3");
    
    let innerRow = $("<div></div>").addClass("row").addClass("no-gutters");
    card.append(innerRow);
    
    let imgCol = $("<div></div>").addClass("col-md-4");
    innerRow.append(imgCol);
    
    let img = $("<img></img>").addClass("card-img").addClass("recipe-img").attr("src", "img/chicken.jpg");
    imgCol.append(img);

    let bodyCol = $("<div></div>").addClass("col-md-8");
    innerRow.append(bodyCol);

    let cardBody = $("<div></div>").addClass("card-body");
    bodyCol.append(cardBody);

    let recipeLeft = $("<div></div>").addClass("recipe-left");
    cardBody.append(recipeLeft);

    let recipeName = $("<h1></h1>").addClass("card-title").html(recipe.name);
    let myRating = $("<h5></h5>").addClass("card-text").html("<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>");
    let type = getRecipeType(recipe.type);
    let recipeType = $("<p></p>").addClass("card-text").addClass("text-muted").html(type.nameSRB);
    
        
    recipeLeft.append(recipeName);
    recipeLeft.append(myRating);
    recipeLeft.append(recipeType);
    

    let recipeRight = $("<div></div>").addClass("recipe-right");
    cardBody.append(recipeRight);

    let rating = $("<p></p>").addClass("card-text");
    let ratingIcon = $("<i></i>").addClass("fas").addClass("fa-star");
    let avg = getAvg(recipe);
    rating.append(avg.toFixed(1) + "/5.0" + "&nbsp;&nbsp;");
    rating.append(ratingIcon);
    recipeRight.append(rating);

    let time = $("<p></p>").addClass("card-text");
    let timeIcon = $("<i></i>").addClass("fas").addClass("fa-clock");
    time.append(recipe.time + "&nbsp;&nbsp;");
    time.append(timeIcon);
    recipeRight.append(time);

    let difficulty = $("<p></p>").addClass("card-text");
    let diffIcon = $("<i></i>").addClass("fas").addClass("fa-book-dead");
    difficulty.append(recipe.difficulty + "/5" + "&nbsp;&nbsp;");
    difficulty.append(diffIcon);
    recipeRight.append(difficulty);

    $("#ratings-col").append(card);
}