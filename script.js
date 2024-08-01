function startUp(){
    const buttons = ['add', 'delete', 'refresh'];
    buttons.forEach((name)=>{
        const button = document.createElement("button");
        button.type = "button";
        button.innerText = name;
        button.setAttribute('id', `${name}`);
        document.getElementById("buttonBar").appendChild(button);
    })
}
startUp();
let shelf = [];
let shelfMap = [];
const addButton = document.getElementById('add');
const delButton = document.getElementById('delete');
const formDialog = document.getElementById('formAdd');
const formAdd = document.getElementById('bookAdd');

const bookPrototype = {
    addToShelf : function() {
        shelf.push(this);
    },
    delFromShelf : function(){
        const index = shelf.indexOf(this);
        shelf.splice(index, 1)
    }
}

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;    
}

Object.assign(Book.prototype, bookPrototype);

function addBook(){
    //
}
function delBook(){
    //
}
function refreshShelf(){
    document.getElementById("bookShelf").replaceChildren();
    shelf.forEach((book, index)=>{
        let bookId = `book${index}`;
        let card = document.createElement("div");
        card.setAttribute('class', 'book');
        card.setAttribute('id', `${bookId}`);
        document.getElementById("bookShelf").appendChild(card);
        console.log(bookId);
        for (let prop in book){
            if (book.hasOwnProperty(prop)){
                let properties = document.createElement("p");
                properties.innerText = book[prop];
                document.getElementById(`${bookId}`).appendChild(properties);

            }
        }
        
    })
}

//button behaviour

addButton.addEventListener('click', () => {
    formDialog.showModal();
}  )
formAdd.addEventListener('submit', (event) =>{
    event.preventDefault();
    let title = formAdd.elements.namedItem("title").value;
    let author = formAdd.elements.namedItem('author').value;
    let year = formAdd.elements.namedItem('year').value;
    shelfMap.push(title);

    const book = new Book(`${title}`, `${author}`, `${year}`);
    book.addToShelf();
    formDialog.close();
    console.log(shelf);
    refreshShelf();
    formAdd.reset();
})

delButton.addEventListener('click', () =>{
    shelf.splice((shelf.length - 1), 1);
    refreshShelf();
})




