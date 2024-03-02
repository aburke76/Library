const cardContainer = document.querySelector(".card-container");
const card = document.createElement("div");

const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".book-btn");
const closeBtn = document.querySelector(".close");

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

const myLibrary = [
    {
        title: "The Restaraunt at the End of the Universe",
        author: "Douglas Adams",
        pages: 250,
        read: "Not read",
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.forEach(() => {
        card.className = "card";
        cardContainer.append(card);
    });
    addInfoToBook();
}

function addInfoToBook() {
    let list = document.createElement("ul");
    let listTitle = document.createElement("li");
    listTitle.className = "title";
    let listAuthor = document.createElement("li");
    listAuthor.className = "author";
    let listPages = document.createElement("li");
    listPages.className = "pages";
    let listRead = document.createElement("li");
    listRead.className = "read";
    let listDelete = document.createElement("li");
    listDelete.className = "delete";
    list.append(listTitle);
    list.append(listAuthor);
    list.append(listPages);
    list.append(listRead);
    list.append(listDelete);
    card.append(list);
}

addBookToLibrary();
