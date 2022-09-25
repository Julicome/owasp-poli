(function(){
    let event = document.getElementsByClassName("nav-link active")
    activeNav(event,'nav1',false)
})();

function activeNav(event, nav, clear = true){
    var tabContent,tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    tabLinks = document.getElementsByClassName("tab-option");

    if(clear){
        for (let index = 0; index < tabContent.length; index++) {
            tabContent[index].style.display = "none";
        }
    
        for (let index = 0; index < tabLinks.length; index++) {
            tabLinks[index].className = tabLinks[index].className.replace(" active","");
        }

        event.currentTarget.className += " active";
    }
    
    document.getElementById(nav).style.display ="block";    
}