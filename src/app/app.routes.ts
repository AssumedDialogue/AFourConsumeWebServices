import { Routes } from '@angular/router';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { FindBookComponent } from './components/find-book/find-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { BookListComponent } from './components/book-list/book-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: CreateBookComponent },
  { path: 'books/:id', component: FindBookComponent },
  { path: 'books/:id/update', component: UpdateBookComponent },
  { path: 'books/:id/delete', component: DeleteBookComponent }
];
