import { User } from './classes/User.js';
import { UserManager } from './classes/UserManager.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let users = new UserManager([]);
    
    users.load();
    
    let createForm = document.getElementById("create-form");
    
    createForm.addEventListener("submit", function(e){
        
        e.preventDefault();
        
        let id = users.users.length +1;
        let userName = document.getElementById("new-username").value;
        let userEmail = document.getElementById("new-user-email").value;
        let userPassword = document.getElementById("new-user-password").value;
        let confirmUserPassword = document.getElementById("confirm-new-user-password").value;
        let userFirstname = document.getElementById("new-user-firstname").value;
        let userLastname = document.getElementById("new-user-lastname").value;
        let userAvatar = document.getElementById("new-user-avatar").value;
        
        
        if(userPassword === confirmUserPassword){
            
            let newUser = new User(id, userName, userEmail, userPassword, userFirstname, userLastname, userAvatar);
            users.createUser(newUser);
            console.log(users);
            users.save();
            window.location.href = "admin-users.html";
            
        }else{
            
            alert("Les mots de passe doivent être identiques");
        }
        
    });
});