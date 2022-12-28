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
  return;
}

let submitButton = document.getElementById("submitButton");
let bookName = document.getElementById("bookName");
let authorName = document.getElementById("authorName");
let bookStatus = document.getElementById("status");
let bookForm = document.querySelector("form");
let tableBody = document.getElementById("tableBody");

bookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    addBookToLibrary();
    displayOutput();
})

displayOutput();

function displayOutput(){

    tableBody.innerHTML="";
    myLibrary.forEach(element => {

        tempRow = tableBody.insertRow(element);
        let cell1= tempRow.insertCell(0);
        let cell2= tempRow.insertCell(1);
        let cell3= tempRow.insertCell(2);

        cell1.innerHTML = element.name;
        cell2.innerHTML = element.author;
        cell3.innerHTML = element.status;
    });

}