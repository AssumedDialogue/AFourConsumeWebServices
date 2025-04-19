import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  bookList?: Book[];
  constructor(private bookService: BookService) {
  }
  ngOnInit(): void {
    this.getBookList();
  }
  getBookList(){
    this.bookService.getAllBooks()
      .subscribe({
        next:(data)=>{
          this.bookList = data;
          console.log(data);
        },
        error:(e)=>console.error(e)
      });
  }

}
