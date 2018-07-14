window.addEventListener("load", menu);

function menu() {
    closeAllUI();
    document.getElementById("menu").style.display = "";
    //window.removeEventListener("load", menu);
}

function tutorial() {
    closeAllUI();
    document.getElementById("tutorial").style.display = "";
}

function about() {
    closeAllUI();
    document.getElementById("about").style.display = "";
}