$(document).ready(function () {
    if(document.documentElement.lang != "rs")
        $("#RS").attr("href", window.location.href.replace("_en.html",".html"));
    
    if (document.documentElement.lang != "en")
        $("#EN").attr("href", window.location.href.replace(".html","_en.html"));
});