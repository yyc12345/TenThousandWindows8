window.addEventListener("load",menu);

function menu() {
    closeAllUI();
    document.getElementById("menu").style.display="";
    window.removeEventListener("load",menu);
}