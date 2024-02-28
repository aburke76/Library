const myLibrary = [
    {
        title: "Hair",
        author: "Leslie Patricelli",
        pages: 26,
        read: "Read",
    },
    {
        title: "No No Yes Yes",
        author: "Leslie Patricelli",
        pages: 26,
        read: "Read",
    },
    {
        title: "The Restaraunt at the End of the Universe",
        author: "Douglas Adams",
        pages: 250,
        read: "Not read",
    },
];

console.log(myLibrary);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {}
