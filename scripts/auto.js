//Create a variable to generate the button
var generateBtn = document.querySelector("#generate");

//write url to document
function writeURL() {

    var url = generateURL();
    var urlText = document.querySelector("#url");

    //begin function to generate url
    urlText.value = url;
    function generateURL() {
        //Get the URL
        var oldLink = prompt("Enter the URL from Boise State.");
        console.log("oldLink");

        //Get the API
        var apiId = prompt("Enter API ID");
        console.log("apiId");

        //Slice off the www.boisestatepublicradio


        //Replace that with npr.org


        //Remove slug -- ie environment, new, etc


        //Add slashes instead of dashes in the date


        //Concatenate it


        //Write in the box!



    };



};

generateBtn.addEventListener("click", writeURL);

//coded by webprinc3ss