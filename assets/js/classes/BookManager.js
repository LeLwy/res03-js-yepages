class BookManager{
    
    #books;
    
    constructor(books){
        
        this.#books = [];
    }
    
    get books (){
        
    return this.#books;
    }

    set books (books){
        
        this.#books = books;
    }
    
    findAllBooks(){
        
        for(book of this.#books){
            
            return book;
            
        }
    }
    
    findBookById(id){
        
        for(book of this.#books){
            
            if(book.id === id){
                
                return book;
                
            }else{
                
                return null;
            }
        }
    }
    
    findBooksByTitle(title){
        
        for(book of this.#books){
            
            if(book.title === title){
                
                return book;
                
            }else{
                
                return null;
            }
        }
    }
    
    findBooksByAuthor(author){
        
        for(book of this.#books){
            
            if(book.author === author){
                
                return book;
                
            }else{
                
                return null;
            }
        }
    }
    
    findBooksByPublicationYear(year){
        
        for(book of this.#books){
            
            if(book.publicationDate === publicationDate){
                
                return book;
                
            }else{
                
                return null;
            }
        }
    }
    
    createBook(book){
        
        this.#books.push(book);
    }
    
    deleteBook(bookId){
        
        let updatedCollection = [];
        
        for(let i=0; i<this.#books.length; i++){
            
            if(this.#books[i].id !== bookId){
                
                updatedCollection.push(this.#books[i]);
            }
        }
        
        this.#books = updatedCollection;
    }
    
    editBook(book){
        
        for(let i=0; i<this.#books.length; i++){
            
            if(book.id === this.#books[i].id){
                
                this.#books[i] = book;
            }
        }
    }
    
    save(){
        
        sessionStorage.setItem("storedBooks", JSON.stringify(this.#books));
    }
    
    load(){
        
        let newBooks = JSON.parse(sessionStorage.getItem("storedBooks"));
        let newCollection = [];
        
        for(let i=0; i<newBooks.length; i++){
            
            let bookParsed = JSON.parse(newBooks[i]);
            let book = new Book(bookParsed.id, bookParsed.title, bookParsed.author, bookParsed.publicationDate, bookParsed.totalPages, bookParsed.excerpt, bookParsed.coverImage);
            newCollection.push(book);
        }
        
        this.#books = newCollection;
    }
}

export { BookManager };