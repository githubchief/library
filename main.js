let myLibrary = [];

//default books for displaying tables
let sapiens=new Book("Sapiens","Yuval Noah Harari","read");
let alchemist=new Book("Alchemist","Paulo Choelo","read");
let naruto=new Book("Naruto","Masashi Kishimoto","not read");

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

    //create a new book and push it to the library.
    const newBook = new Book(bookName.value, authorName.value, bookStatus.value);
    let exists=0;

    for (element in myLibrary)
     {  
        //check if the newbook is already existing in the library
        if(newBook.name == myLibrary[element].name) {

            //if book already exists warn user about the same.
            alert("book already exists");
            exists=1;
            return;
        }
        
    }

    //if book doesnt exist then push it
    if (exists==0){
        myLibrary.push(newBook);
    }
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
  
        // creating button element for status
        var button = document.createElement('BUTTON');
        
        button.className = "statusButton";

        // creating text to be displayed on button
        var text = document.createTextNode(element.status);

        //update buttons value using elements status
        button.value=element.status; 

        // appending text to button
        button.appendChild(text);
         
        // appending button to cell3
        cell3.appendChild(button); 


    });
}


