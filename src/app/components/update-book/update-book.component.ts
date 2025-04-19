import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {NgIf} from "@angular/common"
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {
  book?: Book;
  allowEdit?: string;
  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getBook(this.route.snapshot.params['id']);
    console.log("Book id = " + this.book?.id);
    console.log("Book title = " + this.book?.title);

    this.getEditQuery();
  }

  getBook(id:any){
    this.bookService.getBookById(id)
      .subscribe({
        next:(data)=>{
          this.book = data;
          console.log(data);
        },
        error:(e)=>console.error(e)});
  }
  getEditQuery(){
    this.route.queryParams.subscribe(params=>{
      this.allowEdit = params['allowEdit'];
      console.log("AllowEdit = " + this.allowEdit);
    });
  }
  updateBook(){
    if(this.allowEdit === '1' && this.book?.id ) {
      this.bookService.updateBook(this.book, this.book?.id).subscribe(
        (data)=>{
          console.log(data);
        }
      );
      console.log("Update book " + this.book?.title + " id = " + this.book?.id);
    }
  }

}
