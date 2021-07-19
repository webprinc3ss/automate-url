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
        //https://www.boisestatepublicradio.org/environment/2021-07-15/all-hands-on-deck-national-fire-preparedness-level-reaches-highest-most-critical-tier
        var oldLink = prompt("Enter the URL from Boise State.");
        console.log("oldLink", oldLink);

        //Get the API
        //1016623768
        var apiId = prompt("Enter API ID");
        console.log("apiId", apiId);

        //Replace www.boisestatepublicradio with npr
        var nprLink = oldLink;
        nprLink = nprLink.replace('www.boisestatepublicradio', 'npr');
        console.log('nprLink', nprLink);

        //Remove slug -- ie environment, new, etc
        var noSlugLink = nprLink.replace(/npr.org\/(\w+)/, "npr.org");
        console.log("noSlugLink", noSlugLink)
        //Maybe consolidate previous two steps
        //https://stackoverflow.com/questions/48555156/replacing-separate-parts-of-an-url-with-javascript
        // https://stackoverflow.com/questions/14262770/javascript-replace-dash-hyphen-with-a-space/14262891

        //Add slashes instead of dashes in the date
        // https://regexr.com/
        //used 'negative lookahead' to avoid replacing numbers: (?!abc)	negative lookahead
        var noDash = noSlugLink.replace(/(?!0-9\-)\-/, "/");
        console.log("noDash", noDash)

        var noDash2 = noDash.replace(/(?!0-9\-)\-/, "/");
        console.log("noDash2", noDash2);

        // console.log("apiId", apiId);
        //Add API!
        var newLink = noDash2.replace(/(?<=\d+\/\d+\/\d+\/)/, apiId + "/");
        console.log("newLink", newLink)


        //Write in the box!
        //https://www.boisestatepublicradio.org/environment/2021-07-15/all-hands-on-deck-national-fire-preparedness-level-reaches-highest-most-critical-tier
        //1016623768

    };



};

generateBtn.addEventListener("click", writeURL);

//coded by webprinc3ss