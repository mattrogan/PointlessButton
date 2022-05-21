var count = 0;
var clickedAlready = false;

function increment() {
    if (!clickedAlready) {
        document.getElementById("youHaveClicked").innerHTML = "You have clicked the pointless button";
        document.getElementById("times").innerHTML = "times";
    }
    count++;
    document.getElementById("count").innerHTML = count;

    // Conditional statement: secret messages
    if (count == 69) {
        document.getElementById("secretMessage").innerHTML = "Haha nice";
    } else if (count == 420) {
        document.getElementById("secretMessage").innerHTML = "😎";
        document.getElementById("secretMessage").setAttribute("font-size", "69");
    } else {
        document.getElementById("secretMessage").innerHTML = "";
        document.getElementById("secretMessage").setAttribute("font-size", "24");
    }
}