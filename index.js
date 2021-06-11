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
        let avg1 = 0;
        e1.grade.forEach(element => {
            avg1 += element["grade"];
        });
        if (e1.grade.length != 0) {
            avg1 /= e1.grade.length;
        }

        let avg2 = 0;
        e2.grade.forEach(element => {
            avg2 += element["grade"];
        });
        if (e2.grade.length != 0) {
            avg2 /= e2.grade.length;
        }

        return -(avg1 - avg2);
    });

    for (let i = 0; i < recipes.length && i < 3; ++i) {
        appendRecipeCard(recipes[i]);
        //console.log(recipes[i]);
    }
}

function appendRecipeCard(recipe) {
    let cardCol = $("<div></div>").addClass("col-lg-10").addClass("offset-lg-1");

    let card = $("<div></div>").addClass("card").addClass("mb-3").addClass("mt-3");
    cardCol.append(card);
    
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

    let recipeName = $("<h1></h1>").addClass("card-title").html(recipe["name"]);
    let recipeAuthor = $("<h5></h5>").addClass("card-text").html(recipe["aut"]);

    recipeLeft.append(recipeName);
    recipeLeft.append(recipeAuthor);

    $("#recipes-row").append(cardCol);
}

/*
            <div class="col-lg-10 offset-lg-1">
                <div class="card mb-3 mt-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="img/chicken.jpg" class="card-img recipe-img">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <div class="recipe-left">
                                    <h1 class="card-title">Pileća krilca</h1>
                                    <h5 class="card-text">Nikola Dajić</h5>
                                    <p class="card-text text-muted">Glavno jelo</p>
                                </div>
                                <div class="recipe-right">
                                    <p class="card-text"><i class="fas fa-star"></i>
                                        &nbsp; 5.0/5.0</p>
                                    <p class="card-text"><i class="fas fa-clock"></i> &nbsp; 4h
                                    </p>
                                    <p class="card-text"><i class="fas fa-book-dead"></i>
                                        &nbsp; 4/5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
*/