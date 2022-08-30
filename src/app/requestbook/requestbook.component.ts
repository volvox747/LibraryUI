import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LibraryService } from '../library.service';
import { RequestBookSchema } from '../models/requestbook.model';
import { LoginSchema } from '../models/user.model';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css'],
})
export class RequestbookComponent implements OnInit
{
  constructor(private library: LibraryService, private book: BookService) { }
  requests: RequestBookSchema[];
  errorMsg: {};
  adminToken: string;
  loginData: string;

  ngOnInit(): void
  {
    if (localStorage.getItem('adminToken'))
    {
      this.adminToken = localStorage.getItem('adminToken');
      this.book.getRequestBooksForAdmin().subscribe(
        {
          next: (res: RequestBookSchema[]) => this.requests = res
          , error: (err: HttpErrorResponse) => this.errorMsg = err
        });
    }
    console.log(this.library.loginData);

    // receiving loging data as soon as user logs in
    if (localStorage.getItem('jwt'))
    {
      this.loginData = localStorage.getItem('userId');
      this.book
        .getRequestBooksForUser(this.loginData)
        .subscribe(
          {
            next: (res: RequestBookSchema[]) => this.requests = res
            , error: (err: HttpErrorResponse) => this.errorMsg = err
          });
    }
  }
}
