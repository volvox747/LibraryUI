import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookSchema } from './models/book.model';
import { RequestSchema } from "./models/request.model";
import { map, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:BookSchema[];
  bookDetails=new Subject<BookSchema>();
  constructor(private http:HttpClient) { }

  postAddBook(bookData:BookSchema)
  {
    return this.http.post('https://localhost:44309/add-book',bookData)
  }

  // Get All Books Details
  getData()
  {
      return this.http
      .get<BookSchema[]>("https://localhost:44309/books")
  }
  
  // post the request of book along with loginId and get requested msg

  postrequestBook(requestData:RequestSchema)
  {
      this.http
          .post('https://localhost:44309/request-book',requestData)
          .subscribe(res=>console.log(res))
  }

}
