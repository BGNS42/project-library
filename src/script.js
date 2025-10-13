
const container = document.querySelector(".container");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookRead = document.querySelector("#bookRead");

const dialogNewBook = document.querySelector("dialog");
const form = document.querySelector("form");
const addBtn = document.querySelector("#addButton");
const cancelBtn = document.querySelector("#cancel");
const addBookBtn = document.querySelector("#addBook");

const bookShelf = document.querySelector(".bookShelf");

const myLibrary = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Read" : "Not read yet";
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

Book.prototype.showBook = function() {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const nameCard = document.createElement("li");
    nameCard.classList.add("nameCard");
    nameCard.innerText = `Title: ${this.title}`;

    const authorCard = document.createElement("li");
    authorCard.classList.add("authorCard");
    authorCard.innerText = `Author: ${this.author}`;

    const pagesCard = document.createElement("li");
    pagesCard.classList.add("pagesCard");
    pagesCard.innerText = `Pages: ${this.pages}`;

    const readCard = document.createElement("li");
    readCard.classList.add("readCard");
    readCard.innerText = `Read: ${this.read}`;

    
    bookShelf.appendChild(bookCard);
    bookCard.appendChild(nameCard);
    bookCard.appendChild(authorCard);
    bookCard.appendChild(pagesCard);
    bookCard.appendChild(readCard);
}

const harryPotter = new Book("Harry Potter e a Pedra Filosofal", "J.K. Rolling", "235");

const harryPotter2 = new Book("Harry Potter e a camara secreta", "J.K. Rolling", "235");

const senhorDosAneis = new Book("Senhor dos Aneis e as Duas Torres", "J.R.R. Tolkien", "554", "Read");

addBookToLibrary(harryPotter);
addBookToLibrary(harryPotter2);
addBookToLibrary(senhorDosAneis);

console.table(myLibrary);

harryPotter.showBook();
harryPotter2.showBook();
harryPotter2.showBook();
harryPotter2.showBook();
harryPotter2.showBook();
senhorDosAneis.showBook();

form.addEventListener("submit", function() {
    const readStatus = bookRead.checked;
    const book = new Book(bookName.value, bookAuthor.value, bookPages.value, readStatus);
    addBookToLibrary(book);
    // console.table(book);
    console.table(myLibrary);
    
    book.showBook();
    // form.reset();
    // console.log("Heelo")
})

addBookBtn.addEventListener("click", () => {
    form.reset();
    dialogNewBook.showModal();
})

cancelBtn.addEventListener("click", () => {
    dialogNewBook.close();
})

dialogNewBook.addEventListener("click", (event) => {
    if (event.target === dialogNewBook) {
      dialogNewBook.close();
    }
})