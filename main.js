let myLibrary = [];

//default books for displaying tables
const sapiens=new Book("Sapiens","Yuval Noah Harari","read");
const alchemist=new Book("Alchemist","Paulo Choelo","read");
const naruto=new Book("Naruto","Masashi Kishimoto","not read");

//push the default books to library
myLibrary.push(sapiens);
myLibrary.push(alchemist);
myLibrary.push(naruto);

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
