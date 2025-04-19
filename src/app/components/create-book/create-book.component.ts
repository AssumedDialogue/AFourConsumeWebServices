import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {NgIf} from "@angular/common"

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {
  book: Book = new Book();
  addMessage: string = '';
  constructor(private bookService: BookService) {
    this.book.id = 0;
    this.book.title = "";
  }
  createBook() {
    if(this.book.title === ''){
      this.addMessage = 'Please enter a title';
      console.log(this.book.title + " " + this.book.id);
    } else {
      this.bookService.createBook(this.book).subscribe(data => {
        console.log(data);
      });
      console.log(this.book);
    }
  }


}
