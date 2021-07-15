//Create a variable to generate the button
var generateBtn = document.querySelector("#generate");

//write url to document
function writeURL() {

    var url = generateURL();
    var urlText = document.querySelector("#url");

    //begin function to generate url
    urlText.value = url;
    function generateUrl() {
        var oldLink = prompt("Enter the URL from Boise State.");
        console.log("oldLink");
    };



};

generateBtn.addEventListener("click", writeURL);

//coded by webprinc3ss