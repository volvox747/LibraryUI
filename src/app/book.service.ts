import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookSchema } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  postAddBook(bookData:BookSchema)
  {
    return this.http.post('https://localhost:44309/add-book',bookData)
  }
}
