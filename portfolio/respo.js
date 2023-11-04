let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

// You should add event listeners to each tablink individually
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", ()=> {
        opentab(i);
    });
}

function opentab(tabIndex) {
    // Remove the "active-link" class from all tablinks
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    
    // Remove the "active-tab" class from all tabcontents
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    
    // Add the "active-link" class to the clicked tablink
    tablinks[tabIndex].classList.add("active-link");
    
    // Add the "active-tab" class to the corresponding tabcontent
    tabcontents[tabIndex].classList.add("active-tab");
}