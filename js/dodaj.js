$(document).ready(function () {
    $("#predaj").click(function () {
        let recipes = localStorage.getItem("recipes");
        recipes = recipes == null ? data : JSON.parse(recipes);

        $("#errorAdd").html("");
        let recipeName = $("#recipeName").val();
        let recipeType = $("#recipeType").val();
        let recipeData = $("#recipeData").val();
        let recipeLength = $("#recipeLength").val();
        let recipeDif = $("#recipeDif").val();
        let recipeLink = $("#recipeLink").val();
        if (recipeName == "" || recipeType == "" || recipeData == "" || recipeLength == "" || recipeDif == "") {
            $("#errorAdd").html("Sva polja su obavezna").css("color", "red");
            return;
        }
        if (!/^[0-9]+$/.test(recipeLength)) {
            $("#errorAdd").html("Duzina trajanja mora biti broj").css("color", "red");
            return;
        }
        if (parseInt(recipeLength) <= 0) {
            $("#errorAdd").html("Duzina trajanja mora biti broj veci od 0").css("color", "red");
            return;
        }
        let max = 0;
        recipes.forEach(element => {
            if (element["id"] > max)
                max = element["id"];
        });
        let recept = {
            id: max + 1,
            name: recipeName,
            author: 0,
            grade: [],
            time: recipeLength,
            difficulty: recipeDif,
            type: recipeType,
            recipe: recipeData,
            imageLinks: [],
            videoLinks: recipeLink,
            comments: []
        }
        recipes.push(recept);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        $("#errorAdd").html("Recept uspešno dodat!").css("color", "green");
    });
});