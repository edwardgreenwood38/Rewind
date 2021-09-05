// get string that user entered
// controller
function getString() {
    // always hide to start
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// reverse the string
//logic
function reverseString(userString) {
    let revString = [];

    // reverse a string using a for loop
    for (let i = userString.length - 1; i >= 0; i--)
    {
        revString += userString[i];
    }

    return revString;
}

// dsiplay the reversed string
// view 
function displayString(revString) {
    // write message to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}