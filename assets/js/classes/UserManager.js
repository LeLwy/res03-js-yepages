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
        
        sessionStorage.setItem("storedUsers", JSON.stringify(this.#users));
    }
    
    load(){
        
        let newUsers = JSON.parse(sessionStorage.getItem("storedUsers"));
        let newUsersList = [];
        
        for(let i=0; i<newUsersList.length; i++){
            
            let userParsed = JSON.parse(newUsersList[i]);
            let user = new User(userParsed.id, userParsed.username, userParsed.email, userParsed.password, userParsed.firstName, userParsed.lastName, userParsed.profileImage);
            newUsersList.push(user);
        }
        
        this.#users = newUsersList;
    }
    
}

export { UserManager };