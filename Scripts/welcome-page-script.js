const yesButton = document.querySelector('.yes-button');
yesButton.onclick = function () {
    location.href = "Play Game.html";
}

const noButton = document.querySelector('.no-button');
noButton.onclick = function () {
    location.href = "reconsider.html";
}