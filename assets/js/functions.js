function showMenu(){
    
    let menuNameList = document.querySelectorAll("body > main > aside > nav > h2");
    let menuList = document.querySelectorAll("body > main > aside > nav > ul");
    
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

function displayUsers(users){
    
    let tableBody = document.querySelector("body > main > section > section#users-data > table > tbody");
    
    for(let i=0; i<users.length; i++){
        
        let tr = document.createElement("tr");
        
        let tdId = document.createElement("td");
        let id = document.createTextNode(users[i].id);
        tdId.appendChild(id);
        
        let tdName = document.createElement("td");
        let name = document.createTextNode(users[i].name);
        tdName.appendChild(name);
        
        let tdAge = document.createElement("td");
        let age = document.createTextNode(users[i].age);
        tdAge.appendChild(age);
        
        let tdStatus = document.createElement("td");
        let statusSpan = document.createElement("span");
        
        if(users[i].isActive === true){
            
            statusSpan.classList.add("bi-person-fill-up");
            statusSpan.setAttribute("aria-labelledby", "Actif");
            
        }else{
            
            statusSpan.classList.add("bi-person-fill-down");
            statusSpan.setAttribute("aria-labelledby", "Inactif");
        }
        
        tdStatus.appendChild(statusSpan);
        
        let tdAction = document.createElement("td");
        
        let viewLink = document.createElement("a");
        viewLink.setAttribute("href", "#");
        let viewSpan = document.createElement("span");
        viewSpan.classList.add("bi-eye");
        viewSpan.setAttribute("aria-labelledby", "Voir l'utilisateur");
        viewLink.appendChild(viewSpan);
        
        let editLink = document.createElement("a");
        editLink.setAttribute("href", "#");
        let editSpan = document.createElement("span");
        editSpan.classList.add("bi-pen");
        editSpan.setAttribute("aria-labelledby", "Modifier l'utilisateur");
        editLink.appendChild(editSpan)
        
        let delButton = document.createElement("button");
        let delSpan = document.createElement("span");
        delSpan.classList.add("bi-trash3");
        delSpan.setAttribute("aria-labelledby", "Supprimer l'utilisateur");
        delButton.appendChild(delSpan);
        delButton.setAttribute("data-user", users[i].id);
        
        delUser(delButton);
        
        tdAction.appendChild(viewLink);
        tdAction.appendChild(editLink);
        tdAction.appendChild(delButton);
        
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdStatus);
        tr.appendChild(tdAction);
        
        tableBody.appendChild(tr);
    }
}

function delUser(delButton){
    
    delButton.addEventListener("click", function(){
        
        let delButtonId = parseInt(delButton.getAttribute("data-user"));
        let usersDataSection = document.getElementById("users-list");
        let deleteModale = document.getElementById("delete-modal");
        let confirmDeleteSection = document.getElementById("confirm-delete");
        let delUserElement = document.querySelector("#confirm-delete > h4");
        
        let delUserName = users[delButtonId].name;
        delUserElement.innerHTML = delUserName;
        let delUserElementId = delUserElement.id;
        delUserElement.id = "deleted-user-name";
        confirmDeleteSection.appendChild(delUserElement);
        
        usersDataSection.classList.add("d-none");
        deleteModale.classList.remove("d-none");
        
        cancelDeleteModale();
    })
    
}

function cancelDeleteModale(){
    
    let cancelBtn = document.getElementById("modal-cancel-btn");
    let usersDataSection = document.getElementById("users-list");
    let deleteModale = document.getElementById("delete-modal");
    let confirmDeleteSection = document.getElementById("confirm-delete");
    
    cancelBtn.addEventListener("click", function(){
        
        let delUserElement = document.getElementById("deleted-user-name");
        
        usersDataSection.classList.remove("d-none");
        deleteModale.classList.add("d-none");
    })
}

export { showMenu };
export { showAside };
export { displayUsers };
export { delUser };
export { cancelDeleteModale };