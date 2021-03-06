//Create a variable to generate the button
const generateBtn = document.querySelector("#generate");

//write url to document
const writeURL = () => {
    let url = generateURL();
    const urlText = document.querySelector("#url");

    //begin function to generate url
    urlText.value = url;
};

const generateURL = () => {
    //Get the URL
    const oldLink = prompt("Enter the URL from Boise State.", "https://www.boisestatepublicradio.org/environment/2021-07-15/all-hands-on-deck-national-fire-preparedness-level-reaches-highest-most-critical-tier");
    console.log("oldLink", oldLink);

    //Get the API
    const apiId = prompt("Enter API ID from slack", "1016623768");
    console.log("apiId", apiId);

    //Replace www.boisestatepublicradio with npr
    let nprLink = oldLink;
    nprLink = nprLink.replace('www.boisestatepublicradio', 'npr');
    console.log('nprLink', nprLink);

    //Remove slug -- ie environment, new, etc
    const noSlugLink = nprLink.replace(/npr.org\/(\w+)/, "npr.org");
    console.log("noSlugLink", noSlugLink)
    //Maybe consolidate previous two steps
    //Add slashes instead of dashes in the date
    // https://regexr.com/
    //used 'negative lookahead' to avoid replacing numbers: (?!abc)	negative lookahead
    const noDash = noSlugLink.replace(/(?!0-9\-)\-/, "/");
    console.log("noDash", noDash)

    const noDash2 = noDash.replace(/(?!0-9\-)\-/, "/");
    console.log("noDash2", noDash2);

    // console.log("apiId", apiId);
    //Add API!
    //With positive lookbehind: Matches a group before the main expression without including it in the result.
    const newLink = noDash2.replace(/(?<=\d+\/\d+\/\d+\/)/, apiId + "/");
    console.log("newLink", newLink)
    //Write in the box!
    return newLink;
    // result must be returned to pass as result of function to #url
};

generateBtn.addEventListener("click", writeURL);

//coded by webprinc3ss