
function countFunc() {
    
    document.getElementById("mydrop-content").classList.toggle("show");
}


window.onclick = function(event) {
    if(!event.target.matches('drop-button')) {
        var dropdowns = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}