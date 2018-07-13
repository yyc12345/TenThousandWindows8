var welcomeStep = -1;

function welcome() {
    closeAllUI();
    document.getElementById("welcome").style.display="";
    welcomeStep = -1;
    welcomeCore();
}

function welcomeCore() {
    welcomeStep++;

    switch (welcomeStep) {
        case 0:
            document.getElementById("welcomeDesc").innerHTML = "你是一个小电脑商贩，今年你从微软购买了10000套正版Windows8，因此你现在只剩下了1000元，穷困潦倒；但是市场行情不好，各大电脑商贩只能贱卖自己的商品，虽然你也降低了价格，但还是卖不出去，你只能去城市摆摊卖Windows8，现在给你一年时间，如果你的Windows8卖不完，你就输了。";
            break;
        case 1:
            document.getElementById("welcomeDesc").innerHTML = "你没有固定摊位，只能做“走鬼”，也就是流动摊贩。";
            break;
        case 2:
            document.getElementById("welcomeDesc").innerHTML = "你要冒着被城管抓的危险卖Windows8，但是，除此之外，你还要面对一个困难，那就是。。。";
            break;
        case 3:
            document.getElementById("welcomeDesc").innerHTML = "永无止境的孤独！！！！！";
            break;
        case 4:
            document.getElementById("welcomeDesc").innerHTML = "现在，开始卖掉你的Windows8吧";
            break;
        case 5:
            game();
            break;
        default:
            break;
    }
}