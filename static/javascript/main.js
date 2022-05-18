var count = 0;
var clickedAlready = false;

function increment() {
    if (!clickedAlready) {
        document.getElementById("youHaveClicked").innerHTML = "You have clicked the pointless button"
        document.getElementById("times").innerHTML = "times"
    }
    count++;
    document.getElementById("count").innerHTML = count;
}