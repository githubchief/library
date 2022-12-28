let myLibrary = [];

function Book(name, author, status) {
  // the constructor...

  this.name=name;
  this.author=author;
  this.status=status;

}

function addBookToLibrary() {
  // do stuff here


}

let favBook=new Book("Sapiens","Harai Yuval", "read");

console.log(favBook.name);