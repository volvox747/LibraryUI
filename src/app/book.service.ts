import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookSchema } from './models/book.model';
import { RequestSchema } from './models/request.model';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
import { RequestBookSchema } from './models/requestbook.model';

@Injectable({
  providedIn: 'root',
})
export class BookService
{
  books: BookSchema[];
  bookDetails = new Subject<BookSchema>();
  constructor(private http: HttpClient) { }

  // Get All Books Details
  getData()
  {
    return this.http
      .get<BookSchema[]>('https://localhost:44309/books')
      .pipe(map((res) => (this.books = res))
      ,catchError((err:HttpErrorResponse) => throwError(() => err)));
  }

  getRequestBooksForAdmin()
  {
    return this.http
      .get<RequestBookSchema[]>('https://localhost:44309/request-books')
      .pipe(catchError((err) => throwError(() => err)));
  }

  getRequestBooksForUser(loginId: string)
  {
    return this.http
      .get<RequestBookSchema[]>(
        `https://localhost:44309/request-books/${loginId}`
      )
      .pipe(catchError((err) => throwError(() => err)));
  }

  // post the request of book along with loginId and get requested msg

  postrequestBook(requestData: RequestSchema)
  {
    return this.http
      .post<string>('https://localhost:44309/request-book', requestData)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)));
  }

  // add a new book into the database

  postAddBook(bookData: BookSchema)
  {
    return this.http
      .post('https://localhost:44309/add-book', bookData)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)));
  }

  // update book details in the database
  updateBook(updatedData: BookSchema)
  {
    return this.http
      .put<string>('https://localhost:44309/update-book', updatedData)
      .pipe(catchError((err:HttpErrorResponse) => throwError(() => err)));
  }

  // deleting a book from the database
  deleteBook(bookId: string)
  {
    return this.http
      .delete(`https://localhost:44309/delete-book/${bookId}`)
      .pipe(tap((res) => console.log(res)),catchError((err:HttpErrorResponse) => throwError(() => err)));
  }
}
