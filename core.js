//game core data
var coreDay = 0;

var coreMoney = 0;
var coreWindowsCount = 0;
var coreEnergy = 0;
var coreMentalHealth = 0;
var coreMedicine = 0;

var coreWeather = 0;

var coreTimeHour = 0;
var coreTimeMinutes = 0;

var gameTimer;
var weatherTicks = 0;

//screen
//-1=no overlay 0=trade 1=punishment 2=rule
var screenMode = -1;

var isWoring = true;

//guest data

//0=idle 1=guest
var currentGuest = 0;

var guestName = "";
var guestWanna = 0;

function game() {
    closeAllUI();
    document.getElementById("stage").style.display = "";
    document.getElementById("stageOverlay").style.display = "none";

    initGameData();
    updateUI();
    gameTimer = setInterval("gameTick()", 1 * 1000);
}

function exitGame() {
    //restore page's bk
    document.body.style = "background: #ffffff;";

    clearInterval(gameTimer);
}

function gameTick() {
    //set time
    coreTimeMinutes++;
    if (coreTimeMinutes == 60) {
        coreTimeMinutes = 0;
        coreTimeHour++;
        if (coreTimeHour == 24) {
            coreTimeHour = 0;
            coreDay++;
        }
    }

    //set weather
    weatherTicks--;
    if (weatherTicks <= 0) {
        //change
        coreWeather = randomNum(0, 5);
        weatherTicks = randomNum(1, 48) * 60;
    }

    if (isWoring == true && currentGuest == 0) {
        //try generate a guest
        var tryGuest = randomNum(0, 10);
        if (tryGuest >= 8) {
            //generate
            newGuest();
        }
    }

    updateUI();
    updateSky();
    updateGuest();
}

function initGameData() {
    coreDay = 1;
    coreMoney = 1000;
    coreWindowsCount = 10000;
    coreEnergy = 50;
    coreMentalHealth = 50;
    coreMedicine = 5;
    coreWeather = 0;

    coreTimeHour = 7;
    coreTimeMinutes = 0;

    weatherTicks = 24 * 60;

    screenMode = -1;

    isWoring = true;
}

function updateUI() {
    //data
    document.getElementById("stageDay").innerHTML = coreDay;
    switch (coreWeather) {
        case 0:
            document.getElementById("stageWeather").title = "晴天";
            document.getElementById("stageWeather").src = "assets/weatherSunny.png";
            break;
        case 1:
            document.getElementById("stageWeather").title = "多云";
            document.getElementById("stageWeather").src = "assets/weatherPartlycloudy.png";
            break;
        case 2:
            document.getElementById("stageWeather").title = "阴天";
            document.getElementById("stageWeather").src = "assets/weatherCloudy.png";
            break;
        case 3:
            document.getElementById("stageWeather").title = "下雨";
            document.getElementById("stageWeather").src = "assets/weatherRaining.png";
            break;
        case 4:
            document.getElementById("stageWeather").title = "下雪";
            document.getElementById("stageWeather").src = "assets/weatherSnowy.png";
            break;
        case 5:
            document.getElementById("stageWeather").title = "雷暴";
            document.getElementById("stageWeather").src = "assets/weatherLightning.png";
            break;
        default:
            coreWeather = 0;
            document.getElementById("stageWeather").title = "晴天";
            document.getElementById("stageWeather").src = "assets/weatherSunny.png";
            break;
    }
    document.getElementById("stageWindowsCount").innerHTML = coreWindowsCount;
    document.getElementById("stageMoney").innerHTML = coreMoney;
    document.getElementById("stageEnergy").innerHTML = coreEnergy;
    document.getElementById("stageMentalHealth").innerHTML = coreMentalHealth;
    document.getElementById("stageMedicine").innerHTML = coreMedicine;

    document.getElementById("stageTime").innerHTML = (String(coreTimeHour).length == 1 ? "0" + coreTimeHour : coreTimeHour) + ":" + (String(coreTimeMinutes).length == 1 ? "0" + coreTimeMinutes : coreTimeMinutes);

    //button
    if (screenMode != -1) {
        document.getElementById("stageOverlay").style.display = "";
        setGameButtonDisabled(true);
        switch (screenMode) {
            case 0:
                document.getElementById("stageOperationTrade").disabled = false;
                break;
            case 1:
                document.getElementById("stageOperationPunishment").disabled = false;
                break;
            case 2:
                document.getElementById("stageOperationRule").disabled = false;
                break;
            default:
                break;
        }
    } else {
        document.getElementById("stageOverlay").style.display = "none";
        //do another
        setGameButtonDisabled(false);
        if (currentGuest != 0) {
            //have guest
            setGameButtonDisabled(false);
            document.getElementById("stageOperationSleep").disabled = true;
            document.getElementById("stageOperationGetup").disabled = true;
        } else {
            //no guest
            setGameButtonDisabled(true);
            if (isWoring == true) {
                document.getElementById("stageOperationSleep").disabled = false;
            } else {
                setGameButtonDisabled(true);
                document.getElementById("stageOperationGetup").disabled = false;
            }
            document.getElementById("stageOperationTrade").disabled = false;
            document.getElementById("stageOperationPunishment").disabled = false;
            document.getElementById("stageOperationRule").disabled = false;
        }
    }

}

function updateSky() {

    //moring
    if (coreTimeHour == 6 && coreTimeMinutes == 0) {
        document.body.style = "background: #ffffff;";
    }

    //sunset
    if (coreTimeHour == 18 && coreTimeMinutes == 00) {
        document.body.style = "background:url(assets/star.png);";
    }
}

function updateGuest() {
    switch (currentGuest) {
        case 0:
            //no guest
            document.getElementById("stageGuestIcon").src = "";
            break;
        case 1:
            //no guest
            document.getElementById("stageGuestIcon").src = "assets/guest1.jpg";
            break;
        default:
            document.getElementById("stageGuestIcon").src = "";
            break;
    }
}

function showOverlay(index) {
    if (screenMode == -1) {
        screenMode = index;
    } else {
        screenMode = -1;
    }

    switch (index) {
        case 0:
            document.getElementById("overlayContent").innerHTML = "此处记录了最近一周的Windows 8价格走势：";
            break;
        case 1:
            document.getElementById("overlayContent").innerHTML = "处罚纪录：";
            break;
        case 2:
            document.getElementById("overlayContent").innerHTML = "售卖规则每早6：00更新，以交易结算时间来套用规则。";
            break;
        default:
            document.getElementById("overlayContent").innerHTML = "";
            break;
    }

    updateUI();
}

//0=getup 1=sleep
function bed(status) {
    if (status == 0) {
        isWoring = true;
    } else {
        isWoring = false;
    }

    updateUI();
}

//0=sell 1=avoid 2=bargain 3=emerge
function guestProcess(para) {
    switch (para) {
        case 0:
            coreWindowsCount -= guestWanna;
            coreMoney += guestWanna * 200;
            document.getElementById("stageGuestDialog").innerHTML += "交易完成";
            break;
        case 1:
            document.getElementById("stageGuestDialog").innerHTML += "你拒绝了这笔交易";
            break;
        case 2:
            document.getElementById("stageGuestDialog").innerHTML += "此功能未写";
            break;
        case 3:
            document.getElementById("stageGuestDialog").innerHTML += "此功能未写";
            break;
        default:
            break;
    }
    currentGuest = 0;

    updateGuest();
}

function newGuest() {
    currentGuest = 1;

    guestWanna = randomNum(2, 10);;
    guestName = "Nya Cat";

    //set dialog
    document.getElementById("stageGuestDialog").innerHTML += "新顾客：<br>姓名：" + guestName + "<br>想要买" + guestWanna + "个Windows8<br>";
}
