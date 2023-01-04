let myLibrary = [];

class Book {
    constructor (name, author, status) {
        this.name = name;
        this.status = status;
        this.author = author;
    }
}

//default books for displaying tables
let sapiens=new Book("Sapiens","Yuval Noah Harari","read");
let naruto=new Book("Naruto","Masashi Kishimoto","not read");
let dues=new Book("Dues", "Yuval Noah Harari", "read");

//push the default books to library
myLibrary.push(sapiens);
myLibrary.push(naruto);
myLibrary.push(dues);

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


function displayOutput(){
    tableBody.innerHTML="";
    myLibrary.forEach((element,index) => {
        tempRow = tableBody.insertRow(index);
        let cell1= tempRow.insertCell(0);
        let cell2= tempRow.insertCell(1);
        let cell3= tempRow.insertCell(2);
        let cell4 = tempRow.insertCell(3);

        cell1.innerHTML = element.name;
        cell2.innerHTML = element.author;
  
        // creating button element for status

        if(element.status == "not read") {
            cell3.innerHTML= `<button class="statusButton" data-status="not read" data-index="${index}">not read</button>`;
        }
        else {
            cell3.innerHTML= `<button class="statusButton" data-status="read" data-index="${index}">read</button>`;
        }
        cell4.innerHTML= `<button class="deleteButton" data-index="${index}">Delete</button>`;
    });
}

tableBody.addEventListener("click", (e) => {

    // check if the clicked element is a statusButton
    if (e.target.classList.contains("statusButton")) {
      // get the index of the book from the data-index attribute
      let index = e.target.getAttribute("data-index");
      // toggle the status of the book in the myLibrary array
      myLibrary[index].status =
        myLibrary[index].status === "not read" ? "read" : "not read";
      // update the data-status attribute of the button
      e.target.setAttribute("data-status", myLibrary[index].status);
      // update the text content of the button
      e.target.textContent = myLibrary[index].status;
      displayOutput();
    }

    if (e.target.classList.contains("deleteButton")) {
        // get the index of the book from the data-index attribute
        let index = e.target.getAttribute("data-index");
        // toggle the status of the book in the myLibrary array
        myLibrary.splice(index,1) ;
        // // update the data-status attribute of the button
        // e.target.setAttribute("data-status", myLibrary[index].status);
        // // update the text content of the button
        // e.target.textContent = myLibrary[index].status;
        displayOutput();
      }
  });

  displayOutput();
