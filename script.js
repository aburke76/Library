const cardContainer = document.querySelector(".card-container");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");
const addBookBtn = document.querySelector(".book-btn");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector("#submit");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const isRead = document.querySelector("#read");
const readBtn = document.querySelector(".readBtn");

const myLibrary = [];

addBookBtn.addEventListener("click", () => {
    modal.style.display = "block";
    const titleInput = document.querySelector("#title");
    titleInput.focus();
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
        event.preventDefault();
        modal.style.display = "none";
        addBookToLibrary(newBook);
    }
    if (isRead.checked != true) {
        let read = "Not Read";
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        event.preventDefault();
        modal.style.display = "none";
        addBookToLibrary(newBook);
    }
    form.reset();

    console.log(myLibrary);
});

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
    const list = document.createElement("ul");
    const listTitle = document.createElement("li");
    listTitle.className = "title";
    listTitle.textContent = book.title;
    const listAuthor = document.createElement("li");
    listAuthor.className = "author";
    listAuthor.textContent = book.author;
    const listPages = document.createElement("li");
    listPages.className = "pages";
    listPages.textContent = `Pages: ${book.pages}`;
    const listRead = document.createElement("li");
    listRead.className = "read";
    const readBtn = document.createElement("button");
    readBtn.className = "readBtn";
    readBtn.textContent = book.read;
    const listDelete = document.createElement("li");
    listDelete.className = "delete";
    const delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    delBtn.textContent = "Delete";
    card.setAttribute("data-index", myLibrary.length - 1);
    list.append(listTitle);
    list.append(listAuthor);
    list.append(listPages);
    list.append(listRead);
    list.append(readBtn);
    list.append(listDelete);
    list.append(delBtn);
    card.append(list);
    delBtn.addEventListener("click", () => {
        card.remove();
        for (let i = 0; i < myLibrary.length; i++) {
            if (card.dataset.index == i) {
                myLibrary.splice(i, 1);
            }
        }
    });
    if (book.read === "Read") {
        readBtn.classList.add("read-active");
    } else {
        readBtn.classList.add("not-read-active");
    }
    readBtn.addEventListener("click", () => {
        if (book.read === "Read") {
            book.read = "Not Read";
            readBtn.textContent = "Not Read";
            readBtn.classList.remove("read-active");
            readBtn.classList.add("not-read-active");
        } else {
            book.read = "Read";
            readBtn.textContent = "Read";
            readBtn.classList.remove("not-read-active");
            readBtn.classList.add("read-active");
        }
    });
}
