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

    let imgLink = $("<a href =recept.html?id=" + recipe["id"] + "></a>");
    imgCol.append(imgLink);

    let imgPath = recipe.imageLinks.length > 0 ? recipe.imageLinks[0] : "../img/no-img.png";

    let img = $("<img></img>").addClass("card-img").addClass("recipe-img").attr("src", imgPath);
    imgLink.append(img);

    let bodyCol = $("<div></div>").addClass("col-md-8");
    innerRow.append(bodyCol);

    let cardBody = $("<div class='container-fluid'></div>").addClass("card-body");
    bodyCol.append(cardBody);

    let cardBodyRow = $("<div class='row no-gutters'></div>");
    cardBody.append(cardBodyRow);

    let recipeLeft = $("<div class='col-8'></div>");
    cardBodyRow.append(recipeLeft);

    let titleLink;
    if(lang == "RS")
        titleLink = $("<a href =recept.html?id=" + recipe["id"] + "></a>").addClass("text-reset").addClass("text-decoration-none");
    else
        titleLink = $("<a href =recept_en.html?id=" + recipe["id"] + "></a>").addClass("text-reset").addClass("text-decoration-none");
    
    let recipeName = $("<h1></h1>").addClass("card-title").html(recipe.name);
    titleLink.append(recipeName);
    let type = getRecipeType(recipe.type);
    let recipeType = $("<p></p>").addClass("card-text").addClass("text-muted").html(lang == "RS" ? type.nameSRB : type.nameENG);


    let target = "";
    if (cardType != undefined) {
        switch (cardType) {
            case "user":
                let removeButton = $("<button></button>").attr("data-recipe", recipe.id).addClass("btn").addClass("btn-danger").html(lang == "EN" ? "Remove" : "Ukloni");
                removeButton.click(function () {
                    $("#deleteModal").attr("data-recipe", recipe.id).modal('show');
                });
                recipeLeft.append(titleLink);
                recipeLeft.append(recipeType);
                recipeLeft.append(removeButton);

                target = "#recipes-col";
                break;
            case "rating":
                let myRatingHtml = $("<h5></h5>").addClass("card-text");

                let myRating = recipe.grade.find(e => e.userID == 0).grade;
                let cnt;
                for (cnt = 0; cnt < myRating; ++cnt) {
                    myRatingHtml.append($("<i class='fas fa-star'></i>"));
                }
                for (; cnt < 5; ++cnt) {
                    myRatingHtml.append($("<i class='far fa-star'></i>"));
                }

                recipeLeft.append(titleLink);
                recipeLeft.append(myRatingHtml);
                recipeLeft.append(recipeType);

                target = "#ratings-col";
                break;
        }
    }
    else {
        let author = getUserName(recipe.author);
        let recipeAuthor = $("<h5></h5>").addClass("card-text").html(author.name);

        recipeLeft.append(titleLink);
        recipeLeft.append(recipeAuthor);
        recipeLeft.append(recipeType);

        target = "#recipes-col";
    }


    let recipeRight = $("<div class='col-4'></div>").addClass("recipe-right");
    cardBodyRow.append(recipeRight);

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

function appendComment(comment, recipe) {
    let commentDiv = $("<div class='comment'></div");


    let commentBody = $("<div class='comment-body'></div>");
    commentDiv.append(commentBody);

    let commentBodyP = $("<p></p>").text(comment.text);
    commentBody.append(commentBodyP);

    let commentDetails = $("<div class='comment-details text-muted'></div>");
    commentDiv.append(commentDetails);

    if (recipe != undefined) {
        let recipeFile = document.documentElement.lang == "en" ? "recept_en.html" : "recept.html";
        let recipeUrl = $("<a href='" + recipeFile + "?id=" + recipe.id + "'></a>").text(recipe.name);
        commentDetails.append(recipeUrl).append(", " + comment.date);
    }
    else {
        let user = getUserName(comment.userID).name;
        commentDetails.append(user + ", " + comment.date);
    }

    $("#comment-col").append(commentDiv);
}