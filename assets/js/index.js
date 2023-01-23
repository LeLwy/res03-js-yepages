import { User } from './classes/User.js'
import { Book } from './classes/Book.js'
import { UserManager } from './classes/UserManager.js'
import { BookManager } from './classes/BookManager.js'

window.addEventListener("DOMContentLoaded", function(){
    
    let users = new UserManager;
    
    UserManager.createUser(new User(1, "Lwy","user1@user.mail","123456","Louis" ,"Chancioux", "https://www.ligue2.fr/-/media/Project/LFP/Ligue2/Images/Articles-Assests/2021/09/21/2109-2122-L2-Arbitre-Varela-1.jpg"));
    UserManager.createUser(new User(2, "Valmonzo","user2@user.mail","123456","Valmont" ,"Pehaut", "https://i.pinimg.com/280x280_RS/ab/dc/be/abdcbeefd1e238123ce569de11b49b28.jpg"));
    UserManager.createUser(new User(3, "Vicous","user3@user.mail","123456","Victor", "Oustiakine", "https://i.ytimg.com/vi/EKnp0zuWguc/maxresdefault.jpg"));
    
    console.log(users);
    
    let books = new BookManager;
    
    BookManager.createBook(new Book(1,"First Book","First Author",2001,501,"Il était une première fois, dans un premier royaume ...","https://petitsobjetsdecompagnie1.files.wordpress.com/2016/10/001.jpg"));
    BookManager.createBook(new Book(2,"Second Book","Second Author",2002,601,"Il était une seconde fois, dans un second royaume ...","https://i.pinimg.com/236x/2b/11/ae/2b11aea3f6e1bcc87bab5c3393a1d6a3--altered-books-altered-art.jpg"));
    BookManager.createBook(new Book(3,"Third Book","Third Author",2003,401,"Il était une troisième fois, dans un troisième royaume ...","https://i.etsystatic.com/21690701/r/il/152e55/2935881858/il_fullxfull.2935881858_aprp.jpg"));
    
    console.log(books);
    
});