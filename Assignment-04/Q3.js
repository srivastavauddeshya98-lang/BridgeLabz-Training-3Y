// Q3: Library Management System

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  // Mark the book as issued if it is available
  issueBook() {
    if (this.isIssued) {
      return `"${this.title}" is already issued.`;
    }
    this.isIssued = true;
    return `"${this.title}" has been issued.`;
  }

  // Mark the book as returned if it was issued
  returnBook() {
    if (!this.isIssued) {
      return `"${this.title}" was not issued.`;
    }
    this.isIssued = false;
    return `"${this.title}" has been returned.`;
  }
}

// Array of book objects
const library = [
  new Book("Clean Code", "Robert Martin", "ISBN001"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "ISBN002"),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "ISBN003"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "ISBN004"),
];

// Show every book that is not issued
function showAvailableBooks() {
  console.log("Available books:");
  library
    .filter((book) => !book.isIssued)
    .forEach((book) => console.log(`  ${book.isbn} - ${book.title} by ${book.author}`));
}

// Find a book by ISBN and issue it
function issueByIsbn(isbn) {
  const book = library.find((b) => b.isbn === isbn);
  if (!book) {
    console.log(`No book found with ISBN ${isbn}.`);
    return;
  }
  console.log(book.issueBook());
}

showAvailableBooks();

console.log("\nIssuing ISBN002:");
issueByIsbn("ISBN002");

console.log("\nTrying to issue ISBN002 again:");
issueByIsbn("ISBN002");

console.log("\nSearching for an unknown ISBN:");
issueByIsbn("ISBN999");

console.log();
showAvailableBooks();

console.log("\nReturning ISBN002:");
console.log(library[1].returnBook());
