import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})

export class DeleteBookComponent implements OnInit {
  book: Book = new Book();
  private allowDelete: number =0;
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(){
    this.getBook(this.route.snapshot.params['id']);
    this.getDeleteQuery();
  }
  getBook(id:number){
    this.bookService.getBooktById(id)
      .subscribe({
        next:(data)=>{
          this.book = data;
          console.log(data);
        },
        error:(e)=>console.error(e)});
  }
  getDeleteQuery(){
    this.route.queryParams.subscribe(params => {
      this.allowDelete = params['allowDelete'];
      console.log("AllowDelete =" + this.allowDelete);
    });
  }
  deleteBook(){
    console.log(this.book);
    console.log(this.allowDelete)

    if(this.allowDelete == 1){
      console.log('delete this book' + this.book);
      this.bookService.deleteBook(<number> this.book.id).subscribe(()=> console.log("Successfully deleted student"));
      this.router.navigate(['/books']);
    } else {
      console.log('not delete this book');
    }
  }

}
