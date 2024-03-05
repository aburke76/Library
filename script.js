const cardContainer = document.querySelector(".card-container");
const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".book-btn");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector("#submit-btn");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const isRead = document.querySelector("#read");
const readBtn = document.querySelector(".readBtn");
const deleteBtn = document.querySelector(".delBtn");

const myLibrary = [];

addBookBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

submitBtn.addEventListener("click", (event) => {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    if (isRead.checked == true) {
        let read = "Read";
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        readBtn.textContent = "Read";
        event.preventDefault();
        modal.style.display = "none";
        addBookToLibrary(newBook);
    }
    if (isRead.checked != true) {
        let read = "Not Read";
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        readBtn.textContent = "Not Read";
        event.preventDefault();
        modal.style.display = "none";
        addBookToLibrary(newBook);
    }
    console.log(myLibrary);
});

deleteBtn.addEventListener("click", () => {});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    const card = document.createElement("div");
    card.className = "card";
    cardContainer.append(card);
    let list = document.createElement("ul");
    let listTitle = document.createElement("li");
    listTitle.className = "title";
    listTitle.textContent = book.title;
    let listAuthor = document.createElement("li");
    listAuthor.className = "author";
    listAuthor.textContent = book.author;
    let listPages = document.createElement("li");
    listPages.className = "pages";
    listPages.textContent = `Pages: ${book.pages}`;
    let listRead = document.createElement("li");
    listRead.className = "read";
    let readBtn = document.createElement("button");
    readBtn.className = "readBtn";
    readBtn.textContent = book.read;
    let listDelete = document.createElement("li");
    listDelete.className = "delete";
    let delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    delBtn.textContent = "Delete";
    list.append(listTitle);
    list.append(listAuthor);
    list.append(listPages);
    list.append(listRead);
    list.append(readBtn);
    list.append(listDelete);
    list.append(delBtn);
    card.append(list);
}
