$(document).ready(function () {
    $("#predaj").click(function () {
        let recipes = localStorage.getItem("recipes");
        recipes = recipes == null ? data : JSON.parse(recipes);
        
        let SRB = document.documentElement.lang == "rs";

        $("#errorAdd").html("");
        let recipeName = $("#recipeName").val();
        let recipeType = $("#recipeType").val();
        let recipeData = $("#recipeData").val();
        let recipeLength = $("#recipeLength").val();
        let recipeDif = $("#recipeDif").val();
        let recipeLink = $("#recipeLink").val();
        if (recipeName == "" || recipeType == "" || recipeData == "" || recipeLength == "" || recipeDif == "") {
            if(SRB)
                $("#errorAdd").html("Sva polja su obavezna").css("color", "red");
            else
                $("#errorAdd").html("All fields are mandatory").css("color", "red");
            return;
        }
        if (!/^[0-9]+$/.test(recipeLength)) {
            if(SRB)
                $("#errorAdd").html("Duzina trajanja mora biti broj").css("color", "red");
            else
                $("#errorAdd").html("Length must be a number").css("color", "red");
            return;
        }
        if (parseInt(recipeLength) <= 0) {
            if(SRB)
                $("#errorAdd").html("Duzina trajanja mora biti broj veci od 0").css("color", "red");
            else
                $("#errorAdd").html("Length must be greater than 0").css("color", "red");
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
        if(SRB)
            $("#errorAdd").html("Recept uspešno dodat!").css("color", "green");
        else
            $("#errorAdd").html("Recipe successfully added!").css("color", "green");
    });
});