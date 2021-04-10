
function countFunc() {
    
    document.getElementById("mydrop-content").classList.toggle("drop");
}


window.onclick = function(event) {
    if(!event.target.matches('drop-button')) {
        var dropdowns = document.getElementsByClassName("nav-links");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('drop')) {
                openDropdown.classList.remove('drop');
            }
        }
    }
}