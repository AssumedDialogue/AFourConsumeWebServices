import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book.model';

const baseUrl = 'http://localhost:8080/api/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  createBook(data: Book): Observable<Book>{
    return this.http.post(baseUrl, data);
  }




}
