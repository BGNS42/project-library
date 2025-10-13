
const container = document.querySelector(".container");
const addBtn = document.querySelector("#addButton");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookRead = document.querySelector("#bookRead");

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

const senhorDosAneis = new Book("Senhor dos Aneis e as Duas Torres", "J.R.R. Tolkien", "554", "Read");

addBookToLibrary(harryPotter);
addBookToLibrary(senhorDosAneis);

console.table(myLibrary);

harryPotter.showBook();
senhorDosAneis.showBook();

addBtn.addEventListener("click", function() {
    const readStatus = bookRead.checked;
    const book = new Book(bookName.value, bookAuthor.value, bookPages.value, readStatus);
    addBookToLibrary(book);
    console.table(book);
    console.table(myLibrary);
    
    book.showBook();
    // console.log("Heelo")
})
