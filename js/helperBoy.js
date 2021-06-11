function getRecipeType(typeID) {
    return types.find(e => e.id == typeID);
}

function getUserName(userID) {
    return users.find(e => e.id == userID);
}

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

function appendRecipeCard(recipe, lang, cardType) {
    let card = $("<div></div>").addClass("card").addClass("mb-3").addClass("mt-3");

    let innerRow = $("<div></div>").addClass("row").addClass("no-gutters");
    card.append(innerRow);

    let imgCol = $("<div></div>").addClass("col-md-4");
    innerRow.append(imgCol);

    let img = $("<img></img>").addClass("card-img").addClass("recipe-img").attr("src", "../img/chicken.jpg");
    imgCol.append(img);

    let bodyCol = $("<div></div>").addClass("col-md-8");
    innerRow.append(bodyCol);

    let cardBody = $("<div></div>").addClass("card-body");
    bodyCol.append(cardBody);

    let recipeLeft = $("<div></div>").addClass("recipe-left");
    cardBody.append(recipeLeft);

    let recipeName = $("<h1></h1>").addClass("card-title").html(recipe.name);
    let type = getRecipeType(recipe.type);
    let recipeType = $("<p></p>").addClass("card-text").addClass("text-muted").html(lang == "RS" ? type.nameSRB : type.nameENG);


    let target = "";
    if (cardType != undefined) {
        switch (cardType) {
            case "user":
                let removeButton = $("<button></button>").addClass("btn").addClass("btn-danger").html("Ukloni");

                recipeLeft.append(recipeName);
                recipeLeft.append(recipeType);
                recipeLeft.append(removeButton);

                target = "#recipes-col";
                break;
            case "rating":
                let myRating = $("<h5></h5>").addClass("card-text").html("<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>");
                
                recipeLeft.append(recipeName);
                recipeLeft.append(myRating);
                recipeLeft.append(recipeType);
                
                target = "#ratings-col";
                break;
        }
    }
    else {
        let author = getUserName(recipe.author);
        let recipeAuthor = $("<h5></h5>").addClass("card-text").html(author.name);

        recipeLeft.append(recipeName);
        recipeLeft.append(recipeAuthor);
        recipeLeft.append(recipeType);

        target = "#recipes-col";
    }


    let recipeRight = $("<div></div>").addClass("recipe-right");
    cardBody.append(recipeRight);

    let rating = $("<p></p>").addClass("card-text");
    let ratingIcon = $("<i></i>").addClass("fas").addClass("fa-star");
    let avg = getAvg(recipe);
    rating.append(avg.toFixed(1) + "/5.0" + "&nbsp;");
    rating.append(ratingIcon);
    recipeRight.append(rating);

    let time = $("<p></p>").addClass("card-text");
    let timeIcon = $("<i></i>").addClass("fas").addClass("fa-clock");
    time.append(recipe.time + "&nbsp;");
    time.append(timeIcon);
    recipeRight.append(time);

    let difficulty = $("<p></p>").addClass("card-text");
    let diffIcon = $("<i></i>").addClass("fas").addClass("fa-book-dead");
    difficulty.append(recipe.difficulty + "/5" + "&nbsp;");
    difficulty.append(diffIcon);
    recipeRight.append(difficulty);

    $(target).append(card);
}