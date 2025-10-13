const myLibrary = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const harryPotter = new Book("Harry Potter e a Pedra Filosofal", "J.K. Rolling", "235", "Not read yet");
const senhorDosAneis = new Book("Senhor dos Aneis e as Duas Torres", "J.R.R. Tolkien", "554", "Read");

addBookToLibrary(harryPotter);
addBookToLibrary(senhorDosAneis);

console.log(myLibrary);