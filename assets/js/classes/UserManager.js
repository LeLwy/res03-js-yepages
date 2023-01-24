import { User } from './User.js';

class UserManager{
    
    #users;
    
    constructor(users){
        
        this.#users = users;
    }
    
    get users (){
        
    return this.#users;
    }

    set users (users){
        
        this.#users = users;
    }
    
    findAllUsers(){
        
        for(user of this.#users){
            
            return user;
            
        }
    }
    
    findUserById(id){
        
        for(user of this.#users){
            
            if(user.id === id){
                
            return user;
            
        }else{
                
                return null;
            }
        }
    }
    
    findUserByUsername(username){
        
        for(user of this.#users){
            
            if(user.username === username){
                
            return user;
            
        }else{
                
                return null;
            }
        }
    }
    
    findUserByEmail(email){
        
        for(user of this.#users){
            
            if(user.email === email){
                
            return user;
            
        }else{
                
                return null;
            }
        }
    }
    
    createUser(user){
        
        let validEmail = true;
        
        for(let i=0; i<this.#users.length; i++){
            
            if(user.email === this.#users[i].email){
                
                validEmail = false;
                break;

            }
        }
        
        if(validEmail){
            
            this.#users.push(user);
            
        }else{
            
            alert("Cette adresse mail est déjà utilisée");
        }
    }
    
    deleteUser(userId){
        
        let updatedUsersList = [];
        
        for(let i=0; i<this.#users.length; i++){
            
            if(this.#users[i].id !== userId){
                
                updatedUsersList.push(this.#users[i]);
            }
        }
        
        this.#users = updatedUsersList;
    }

    cancelDeleteModale(){
        
        let cancelBtn = document.getElementById("modal-cancel-btn");
        let usersDataSection = document.getElementById("users-list");
        let deleteModale = document.getElementById("delete-modal");
        let confirmDeleteSection = document.getElementById("confirm-delete");
        
        cancelBtn.addEventListener("click", function(){
            
            let delUserElement = document.getElementById("deleted-user-name");
            
            usersDataSection.classList.remove("d-none");
            deleteModale.classList.add("d-none");
        });
    }
    
    editUser(user){
        
        for(let i=0; i<this.#users.length; i++){
            
            if(user.id === this.#users[i].id){
                
                this.#users[i] = user;
            }
        }
    }
    
    login(email, password){
        
        let validUser = false
        
        for(let i=0; i<this.#users.length; i++){
            
            if(email === this.#users[i].email && password === this.#users[i].password){
                
                validUser = true;
                break;
                
            }
            
        }
        
        if(validUser){
            
            alert(`Bienvenue !`);
            
        }else{
            
            alert("Mange tes grands morts !");
        }
        
    }
    
    
    save(){
        
        localStorage.setItem("storedUsers", JSON.stringify(this.#users));
    }
    
    load(){
        
        let newUsers = JSON.parse(localStorage.getItem("storedUsers"));
        
        for(let i=0; i<newUsers.length; i++){
            
            let userParsed = JSON.parse(newUsers[i]);
            let user = new User(userParsed.id, userParsed.username, userParsed.email, userParsed.password, userParsed.firstName, userParsed.lastName, userParsed.profileImage);
            this.#users.push(user);
        }
    }
    
    clearUsers(){
        
        let tableBody = document.querySelector("body#admin-users > main > section > section#users-data > table > tbody");
            tableBody.innerHTML = "";
    }
    
    displayUsers(){
    
        let tableBody = document.querySelector("body#admin-users > main > section > section#users-data > table > tbody");
        
        for(let i=0; i<this.users.length; i++){
            
            let tr = document.createElement("tr");
            
            let tdId = document.createElement("td");
            let id = document.createTextNode(this.users[i].id);
            tdId.appendChild(id);
            
            let tdName = document.createElement("td");
            let username = document.createTextNode(this.users[i].username);
            tdName.appendChild(username);
            
            let tdEmail = document.createElement("td");
            let email = document.createTextNode(this.users[i].email);
            tdEmail.appendChild(email);
            
            let tdStatus = document.createElement("td");
            let statusSpan = document.createElement("span");
            
            if(this.users[i].isActive === true){
                
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
            delButton.setAttribute("data-user", this.users[i].id);
            
            tdAction.appendChild(viewLink);
            tdAction.appendChild(editLink);
            tdAction.appendChild(delButton);
            
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdStatus);
            tr.appendChild(tdAction);
            
            tableBody.appendChild(tr);
        }
    }
}

export { UserManager };