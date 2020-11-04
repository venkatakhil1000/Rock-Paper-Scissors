function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = choicesInNumbers(randRpsInt());
    results = winnerDecider(humanChoice, botChoice);
    messages = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, messages);
}

function randRpsInt() {
    return Math.floor(Math.random() * 3);
}

function choicesInNumbers(number) {
    return ["rock", "paper", "scissors"][number];
}

function winnerDecider(yourChoice, computerChoice) {
    var rpsGameDataBase = {
        "rock": { "scissors": 1, "rock": 0.5, "paper": 0 },
        "paper": { "rock": 1, "paper": 0.5, "scissors": 0 },
        "scissors": { "paper": 1, "scissors": 0.5, "rock": 0 }
    }
    var humanScore = rpsGameDataBase[yourChoice][computerChoice];
    var computerScore = rpsGameDataBase[computerChoice][yourChoice];
    return [humanScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore < computerScore) {
        return { "message": "You Lost!", "color": "red" }
    } else if (yourScore === computerScore) {
        return { "message": "Draw!", "color": "orange" }
    } else {
        return { "message": "You Won!", "color": "green" }
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDataBase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src,
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    var botDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'height=150; width=150 style='box-shadow:1px 10px 50px rgba(27,223,34,0.8);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:50px; padding:25px;'>" + finalMessage["message"] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'height=150; width=150 style='box-shadow:1px 10px 50px rgba(227,23,34,0.8);'>"
    document.getElementById("flexbox-rps").appendChild(humanDiv);
    document.getElementById("flexbox-rps").appendChild(messageDiv);
    document.getElementById("flexbox-rps").appendChild(botDiv);

}

function reset() {
    document.getElementById("flexbox-rps").innerHTML = "<img id='rock' src='rock.png' height=150 width=150 onclick='rpsGame(this)'><img   id='paper' src='paper.png' height=150 width=150 onclick='rpsGame(this)'><img id='scissors' src='scissors.png' height=150 width=150 onclick='rpsGame(this)'>"
}