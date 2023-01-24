import { showMenu } from './functions.js';
import { showAside } from './functions.js';
import { UserManager } from './classes/UserManager.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let users = new UserManager([]);
    
    users.load();
    
    console.log(users);
    
    showMenu();
    showAside();
    users.displayUsers();
    
    let delBtns = document.querySelectorAll("body#admin-users > main > section > section#users-data > table > tbody > tr > td:last-of-type > button");
    
    for(let i=0; i<delBtns.length; i++){
        
        delBtns[i].addEventListener("click", function(){
            
            let usersList = document.getElementById("users-list");
            let deleteModal = document.getElementById("delete-modal");
            
            usersList.classList.add("d-none");
            deleteModal.classList.remove("d-none");
            
            
            users.cancelDeleteModal();
            users.confirmDeleteModal();
        })
    }
});