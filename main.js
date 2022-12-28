let myLibrary = [];

function Book(name, author, status) {
  // the constructor...
  this.name = name;
  this.status = status;
  this.author = author;
}

function addBookToLibrary() {
  // do stuff here
  const newBook = new Book(bookName.value, authorName.value, bookStatus.value)
  myLibrary.push(newBook);
  console.log(myLibrary);
  return;
}

let submitButton = document.getElementById("submitButton");
let bookName = document.getElementById("bookName");
let authorName = document.getElementById("authorName");
let bookStatus = document.getElementById("status");
let bookForm = document.querySelector("form");

bookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    addBookToLibrary();
})
