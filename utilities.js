function closeAllUI() {
    document.getElementById("stage").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("menu").style.display = "none";
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

function setGameButtonVisibility(isDisplayed) {
    if (isDisplayed == true) {
        document.getElementById("stageOperationGetup").style.display = "";
        document.getElementById("stageOperationSell").style.display = "";
        document.getElementById("stageOperationDrink").style.display = "";
        document.getElementById("stageOperationTour").style.display = "";
        document.getElementById("stageOperationExercise").style.display = "";
        document.getElementById("stageOperationSleep").style.display = "";
    } else {
        document.getElementById("stageOperationGetup").style.display = "none";
        document.getElementById("stageOperationSell").style.display = "none";
        document.getElementById("stageOperationDrink").style.display = "none";
        document.getElementById("stageOperationTour").style.display = "none";
        document.getElementById("stageOperationExercise").style.display = "none";
        document.getElementById("stageOperationSleep").style.display = "none";
    }
}
