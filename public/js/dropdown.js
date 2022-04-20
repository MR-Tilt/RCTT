let activeMenu = NaN;
window.onclick = function(e)
{
    if (!e.target.className.match("dropdown-toggle"))
    {
        if(activeMenu)
        {
            activeMenu.style.setProperty("display", "none");
            activeMenu = NaN;
        }
        return;
    }
    if (activeMenu && (activeMenu != e.target.parentElement.getElementsByClassName("dropdown-content")[0]))
    {
        activeMenu.style.setProperty("display", "none");
        activeMenu = NaN;
    }
    let tempMenu = e.target.parentElement.getElementsByClassName("dropdown-content")[0];
    if (tempMenu.style.getPropertyValue("display") == "block")
    {
        tempMenu.style.setProperty("display", "none");
        activeMenu = NaN;
    }
    else
    {
        tempMenu.style.setProperty("display", "block");
        activeMenu = tempMenu;
    }

}
document.getElementById("header-drop").addEventListener("click", function(e) {
    let element = document.getElementById("header-items");
    // let oldState = element.style.getPropertyValue("display");
    let oldState = element.className;
    if (oldState == "header-nav-disabled")
    {
        //element.style.setProperty("display", "none");
        element.className = "header-nav-items";
    }
    else
    {
        // element.style.setProperty("display", "block");
        element.className = "header-nav-disabled";
    }
});