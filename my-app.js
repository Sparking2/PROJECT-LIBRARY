let myLibrary = [];
let table;

function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;

  this.info = function () {
    return (title + " by " + author + ", " + pages + " pages, " + " readed:" + readed);
  }

  this.getInfo = function () {
    return [title, author, pages, readed];
  }
}

function addBookToLibrary(title, author, pages, readed) {
  myLibrary.push(new Book(title, author, pages, readed))
}

function createHeader() {
  var tableHead = document.createElement('thead');
  var headRow = document.createElement('tr');

  var headTitle = document.createElement('td');
  headTitle.innerHTML = 'Book Title';
  var headAuthor = document.createElement('td');
  headAuthor.innerHTML = 'Author';
  var headPages = document.createElement('td');
  headPages.innerHTML = 'Pages';
  var headReaded = document.createElement('td');
  headReaded.innerHTML = 'Pages readed';

  headRow.appendChild(headTitle);
  headRow.appendChild(headAuthor);
  headRow.appendChild(headPages);
  headRow.appendChild(headReaded);

  tableHead.appendChild(headRow);

  return tableHead;
}

function refreshTable() {
  if (table != null)
    destroyTable();

  table = document.createElement("table");

  table.appendChild(createHeader());

  myLibrary.forEach(element => {
    var tableRow = document.createElement("tr");

    element.getInfo().forEach(bookData => {
      var tableCell = document.createElement('td');
      tableCell.innerHTML = bookData;
      tableRow.appendChild(tableCell);
    });

    table.appendChild(tableRow);
  });
  document.body.appendChild(table);
}

function destroyTable() {
  document.body.removeChild(table);
}

addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 336, 250);
addBookToLibrary("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 368, 100);

window.onload = () => {
  refreshTable();
}