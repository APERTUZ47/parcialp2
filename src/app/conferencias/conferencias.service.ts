import { Component, OnInit } from '@angular/core';
import { Book } from '../conferencias';
import { BookService } from '../conferencias';

@Component({
 selector: 'app-book-list',
 templateUrl: './book-list.component.html',
 styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

 books: Array<Book> = [];

 constructor(private conferencias.service: BookService) { }

 getBooks(): void {
   this.bookService.getBooks().subscribe((books) => {
     this.books = books;
   });  
 }

 ngOnInit() {
   this.getBooks();
 }
