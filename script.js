
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
    }
    if (user === 'paper') {
        result = "win";
    }
    if (user === 'scissors') {
        result = "lose";
    }
    alert("Computer chose rock, you " + result + "!");
}
