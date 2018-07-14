function closeAllUI() {
    document.getElementById("stage").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("tutorial").style.display = "none";
    document.getElementById("about").style.display = "none";
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

function setGameButtonDisabled(isDisabled) {
    document.getElementById("stageOperationGetup").disabled=isDisabled;
    document.getElementById("stageOperationSleep").disabled=isDisabled;
    document.getElementById("stageOperationSell").disabled=isDisabled;
    document.getElementById("stageOperationAvoid").disabled=isDisabled;
    document.getElementById("stageOperationBargain").disabled=isDisabled;
    document.getElementById("stageOperationEmerge").disabled=isDisabled;
    document.getElementById("stageOperationTrade").disabled=isDisabled;
    document.getElementById("stageOperationPunishment").disabled=isDisabled;
    document.getElementById("stageOperationRule").disabled=isDisabled;
}
