var coreDay = 0;

var coreMoney = 0;
var coreWindowsCount = 0;
var coreEnergy = 0;
var coreMentalHealth = 0;
var coreMedicine = 0;

var coreWeather = 0;

function game() {
    closeAllUI();
    document.getElementById("stage").style.display = "";

    initGameData();
    gameSetDay();
    updateData();
}

function initGameData() {
    coreDay = 0;
    coreMoney = 1000;
    coreWindowsCount = 10000;
    coreEnergy = 0;
    coreMentalHealth = 50;
    coreMedicine = 5;
    coreWeather = 0;
}

function updateData() {
    //document.getElementById("stageDay").innerHTML = coreDay;
    switch (coreWeather) {
        case 0:
            document.getElementById("stageWeather").innerHTML = "晴天";
            break;
        case 1:
            document.getElementById("stageWeather").innerHTML = "多云";
            break;
        case 2:
            document.getElementById("stageWeather").innerHTML = "阴天";
            break;
        case 3:
            document.getElementById("stageWeather").innerHTML = "下雨";
            break;
        case 4:
            document.getElementById("stageWeather").innerHTML = "下雪";
            break;
        case 5:
            document.getElementById("stageWeather").innerHTML = "遇到城管";
            break;
        case 6:
            document.getElementById("stageWeather").innerHTML = "生病住院";
            break;
        default:
            coreWeather = 0;
            document.getElementById("stageWeather").innerHTML = "晴天";
            break;
    }
    document.getElementById("stageWindowsCount").innerHTML = coreWindowsCount;
    document.getElementById("stageMoney").innerHTML = coreMoney;
    document.getElementById("stageEnergy").innerHTML = coreEnergy;
    document.getElementById("stageMentalHealth").innerHTML = coreMentalHealth;
    document.getElementById("stageMedicine").innerHTML = coreMedicine;
}

function gameSetDay() {
    //set data
    coreDay++;
    document.getElementById("stageDay").innerHTML = coreDay;
    coreMentalHealth += 10;
    coreEnergy += 10;
    if (coreDay != 1)
        coreWeather = randomNum(0, 6);

    //set button
    setGameButtonVisibility(true);
    document.getElementById("stageOperationGetup").style.display = "none";

    //set desc
    switch (coreWeather) {
        case 0:
            document.getElementById("stageDesc").innerHTML = "今天天气真好呐！艳阳高照，不过貌似有点热啊。";
            break;
        case 1:
            document.getElementById("stageDesc").innerHTML = "今天天气是多云啊！既凉爽有不太冷，吹着风真舒服。";
            break;
        case 2:
            //pre process
            document.getElementById("stageOperationTour").style.display = "none";

            document.getElementById("stageDesc").innerHTML = "今天天气不太好！看起来像要下雨的样子。";
            break;
        case 3:
            //pre process
            document.getElementById("stageOperationTour").style.display = "none";
            document.getElementById("stageOperationExercise").style.display = "none";

            document.getElementById("stageDesc").innerHTML = "今天天气太坏！竟然下雨了！";
            break;
        case 4:
            //pre process
            document.getElementById("stageOperationTour").style.display = "none";
            document.getElementById("stageOperationExercise").style.display = "none";

            document.getElementById("stageDesc").innerHTML = "今天天气真坏！下雪了。。。。。";
            break;
        case 5:
            var descStr = "今天运气太差，竟然遇到了城管！<br \>";
            //pre process
            setGameButtonVisibility(false);
            document.getElementById("stageOperationSleep").style.display = "";

            if (coreEnergy > 30) {
                if (coreMentalHealth < 30) {
                    coreMentalHealth = 0;
                    descStr += "你现在没有心思去跟城管打一架，于是你使出全身力气，抄起拳头朝一个城管的脸砸去，城管当场倒地，其他城管显然被吓坏了，慌忙逃窜";
                } else {
                    coreMoney += 10000
                    descStr += "你跟城管打了一架，你身强力壮，当场把城管打的跪地求饶，你也因此乘机向城管索取了保护费！获得10000元";
                }
            } else {
                coreMoney -= 20000;
                descStr += "你没有足够的训练，所以你没有打过身强力壮的城管，城管没收了你的Windows8，你哀求城管，最后花了20000买通城管才把Windows8要回来";
            }

            document.getElementById("stageDesc").innerHTML = descStr;
            break;
        case 6:
            //pre process
            setGameButtonVisibility(false);
            document.getElementById("stageOperationSleep").style.display = "";
            
            coreMedicine += 5;
            coreMoney -= 7000;
            coreWindowsCount += 30;

            document.getElementById("stageDesc").innerHTML = "今天你生了病，住进了医院！<br \>你花了100000元钱<br \>坏了！出大事了！今天有30个人要求退货！你只好妥协，退了货款7000元。<br \>但好消息是，医院免费送你5瓶营养液！";
            break;
        default:
            break;
    }

    updateData()
}

function gameSetNight() {
    //set button
    setGameButtonVisibility(false);
    document.getElementById("stageOperationGetup").style.display = "";

    //set desc
    document.getElementById("stageDesc").innerHTML = "一天就这样过去了...";

    updateData()
}

function gameSellWindows() {
    switch (coreWeather) {
        case 0:
            coreWindowsCount -= 90;
            coreMoney += 18000;
            document.getElementById("stageDesc").innerHTML = "你卖掉了90套Windows8，赚了18000元";
            break;
        case 1:
            coreWindowsCount -= 80;
            coreMoney += 16000;
            document.getElementById("stageDesc").innerHTML = "你卖掉了80套Windows8，赚了16000元";
            break;
        case 2:
            coreWindowsCount -= 70;
            coreMoney += 14000;
            document.getElementById("stageDesc").innerHTML = "你卖掉了70套Windows8，赚了14000元";
            break;
        case 3:
            coreWindowsCount -= 60;
            coreMoney += 12000;
            document.getElementById("stageDesc").innerHTML = "你卖掉了60套Windows8，赚了12000元";
            break;
        case 4:
            coreWindowsCount -= 50;
            coreMoney += 10000;
            document.getElementById("stageDesc").innerHTML = "你卖掉了50套Windows8，赚了10000元";
            break;
        default:
            break;
    }

    //close button
    document.getElementById("stageOperationSell").style.display = "none";

    updateData()
}

function gameDrink() {
    if (coreMedicine > 0) {
        coreMedicine--;
        coreMentalHealth += 50;
        document.getElementById("stageDesc").innerHTML = "你看起来精力旺盛！";
    } else {
        document.getElementById("stageDesc").innerHTML = "看来你好像没有营养液欧！";
    }

    //close button
    document.getElementById("stageOperationDrink").style.display = "none";

    updateData()
}

function gameTour() {
    if ((coreMoney < 5000) || (coreDay + 10 >= 365)) {
        document.getElementById("stageDesc").innerHTML = "你所剩余的天数或你的钱不够了！";
    } else {
        coreDay += 10;
        coreMoney = coreMoney - 5000 + 150 * 200;
        document.getElementById("stageDesc").innerHTML = "你到了美国，美国人很喜欢Windows8，于是你卖出了150套Windows8";
    }

    //close button
    document.getElementById("stageOperationTour").style.display = "none";

    updateData()
}

function gameExercise() {
    if (coreMentalHealth < 20) {
        document.getElementById("stageDesc").innerHTML = "你没有足够的精力做这件事了！";
    } else {
        coreEnergy += 10;
        coreMentalHealth -= 20;
        document.getElementById("stageDesc").innerHTML = "你做了锻炼，你变得强壮了！";
    }

    //close button
    document.getElementById("stageOperationExercise").style.display = "none";

    updateData()
}
