const buttons = ['add', 'delete', 'refresh'];
let shelf = [];

function startUp(){
    buttons.forEach((name)=>{
        const button = document.createElement("button");
        button.type = "button";
        button.innerText = name;
        button.setAttribute('id', `${name}`);
        document.getElementById("buttonBar").appendChild(button);
    })
}
Book.prototype{
    this.addToShelf = function(){
        shelf.push(this);
    }
    this.delFromShelf = function(){
        shelf.pop(this);
    }
}

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    // use prototype for a function
    
}

function refreshShelf(){
    shelf.forEach((book, index)=>{
        console.log(book);
        let bookId = `book${index}`;
        let card = document.createElement("div");
        card.setAttribute('class', 'book');
        card.setAttribute('id', `${bookId}`);
        for (let prop in book){
            if (book.hasOwnProperty(prop) && !(prop instanceof Function)){
                console.log(prop);
                let properties = document.createElement("p");
                properties.innerText = book[prop];
                document.getElementById("bookShelf").appendChild(properties);

            }
        }
        
    })
}

startUp();
let dune = new Book('dune', 'herbert', 1963);
dune.prototype.addToShelf();
refreshShelf();

