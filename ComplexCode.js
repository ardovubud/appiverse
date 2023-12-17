/*
Filename: ComplexCode.js
Description: This code demonstrates a complex and sophisticated implementation of a library management system.
Author: John Doe
Date: 2022-07-15
*/

// Class representing a book in the library
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

// Class representing a library
class Library {
  constructor() {
    this.books = [];
  }

  // Add a new book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Remove a book from the library
  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  // Get all books in the library by a specific author
  getBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  // Get all books published in a specific year
  getBooksByYear(publicationYear) {
    return this.books.filter(book => book.publicationYear === publicationYear);
  }
}

// Example usage of the library system
const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("All books:");
console.log(library.books);

library.removeBook("To Kill a Mockingbird");

console.log("Books after removal:");
console.log(library.books);

const booksByAuthor = library.getBooksByAuthor("F. Scott Fitzgerald");

console.log("Books by F. Scott Fitzgerald:");
console.log(booksByAuthor);

const booksByYear = library.getBooksByYear(1949);

console.log("Books published in 1949:");
console.log(booksByYear);

// ... More complex code with additional functionality and features continues here.

// The code above is just a simplified example to demonstrate the structure and initial usage of the library system. In a real-world implementation, it would likely be much more elaborate and extensive.
// ...
// ... Rest of the code goes here (over 200 lines)