function showMenu(){
    
    let menuNameList = document.querySelectorAll("body#admin-users > main > aside > nav > h2");
    let menuList = document.querySelectorAll("body#admin-users > main > aside > nav > ul");
    
    for(let i=0; i<menuNameList.length; i++){
        
        menuNameList[i].addEventListener("click", function(){
            
            menuList[i].classList.toggle("d-none");
        })
    }
}

function showAside(){
    
    let showAsideBtn = document.getElementById("show-aside-btn");
    let menuListAside = document.getElementById("menu-list-aside");
    let headerLogoSection = document.getElementById("header-logo-section");
    
    showAsideBtn.addEventListener("click", function(){
        
        menuListAside.classList.toggle("d-none");
        headerLogoSection.classList.toggle("open");
    })
}



export { showMenu };
export { showAside };