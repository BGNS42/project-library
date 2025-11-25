
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

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read ? "Read" : "Not read yet";
    }
    
    id = crypto.randomUUID();

    editRead() {
        if(this.read === "Read") {
            this.read = "Not read yet";
        } else {
            this.read = "Read";
        }
    }

    showBook() {
        const bookCard = document.createElement("div");
        bookCard.classList.add(`bookCard`);
        bookCard.dataset.id = `${this.id}`;

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

        const btnCard = document.createElement("div");
        btnCard.classList.add("btnCard"); 

        const deleteBook = document.createElement("button");
        deleteBook.classList.add("delBtn");
        deleteBook.innerText = "Delete Book"

        deleteBook.addEventListener("click", () => {
            if (this.id === bookCard.dataset.id) {
                bookShelf.removeChild(bookCard);
                const indexToRemove = myLibrary.findIndex(item => item.id === this.id);
                if (indexToRemove !== -1) {
                    myLibrary.splice(indexToRemove, 1);
                }
            }
        })
        
        const editRead = document.createElement("button");
        editRead.classList.add("readBtn");
        editRead.innerText = "Read?";

        editRead.addEventListener("click", () => {
            this.editRead();
            readCard.innerText = `Read: ${this.read}`;
        });

        bookShelf.appendChild(bookCard);
        bookCard.appendChild(nameCard);
        bookCard.appendChild(authorCard);
        bookCard.appendChild(pagesCard);
        bookCard.appendChild(readCard);
        bookCard.appendChild(btnCard);
        btnCard.appendChild(editRead);
        btnCard.appendChild(deleteBook);
    }

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const harryPotter = new Book("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "235");

const harryPotter2 = new Book("Harry Potter e a camara secreta", "J.K. Rowling", "235");

const harryPotter3 = new Book("Harry Potter e o Prisioneiro de Azkaban", "J.K. Rowling", "235");

const harryPotter4 = new Book("Harry Potter e o Cálice de Fogo", "J.K. Rowling", "235");

const harryPotter5 = new Book("Harry Potter e a Ordem da Fênix", "J.K. Rowling", "235");

const senhorDosAneis = new Book("Senhor dos Aneis e as Duas Torres", "J.R.R. Tolkien", "554", "Read");

addBookToLibrary(harryPotter);
addBookToLibrary(harryPotter2);
addBookToLibrary(harryPotter3);
addBookToLibrary(harryPotter4);
addBookToLibrary(harryPotter5);
addBookToLibrary(senhorDosAneis);

console.table(myLibrary);

harryPotter.showBook();
harryPotter2.showBook();
harryPotter3.showBook();
harryPotter4.showBook();
harryPotter5.showBook();
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

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialogNewBook.close();
})

dialogNewBook.addEventListener("click", (event) => {
    if (event.target === dialogNewBook) {
      dialogNewBook.close();
    }
})