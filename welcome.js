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
            document.getElementById("welcomeDesc").innerHTML = "你是一位普通的动漫画家，突然有一天，江西萍乡微软总部的一位清洁工Chris找到你并说你已经被微软总部选为特别职员，你很快地到了江西萍乡微软总部接受任命。";
            break;
        case 1:
            document.getElementById("welcomeDesc").innerHTML = "你的顶头上司ChickenFork向你布置了一项艰巨的任务--去一县级城市并在1年之内卖出10000份Windows8。ChickenFork解释道，是因为Windows8销量不好才出此下策，ChickenFork为了让你专心工作，没收了你的全部资产并将其存到江西萍乡微软小金库中，ChickenFork最终只给了你1000元，让你孤身一人前往小县城。小县城的市场行情不好，各大电脑商贩只能贱卖自己的商品，虽然你也降低了价格，但还是卖不出去，你只能去摆摊卖Windows8，现在，如果你在一年之内卖不完10000份Windows8，你就输了。";
            break;
        case 2:
            document.getElementById("welcomeDesc").innerHTML = "你没有固定摊位，只能做“走鬼”，也就是流动摊贩。你要冒着被城管抓的危险卖Windows8，但是，除此之外，你还要面对一个困难，那就是。。。";
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