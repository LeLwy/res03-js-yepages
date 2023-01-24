import { showMenu } from './functions.js';
import { showAside } from './functions.js';
import { UserManager } from './classes/UserManager.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let users = new UserManager([]);
    
    users.load();
    
    
    showMenu();
    showAside();
    users.displayUsers();
    
    let delBtns = document.querySelectorAll("body#admin-users > main > section > section#users-data > table > tbody > tr > td:last-of-type > button");
    
    for(let i=0; i<delBtns.length; i++){
        
        delBtns[i].addEventListener("click", function(){
            
            let userId = parseInt(delBtns[i].getAttribute("data-user"));
            users.deleteUser(userId);
            
        });
    }
});