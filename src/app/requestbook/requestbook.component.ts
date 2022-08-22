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
  errorMsg:{};
  admin: string;
  loginData: LoginSchema;

  ngOnInit(): void
  {
    if (this.library.adminName)
    {
      this.admin = this.library.adminName;
      this.book.getRequestBooksForAdmin().subscribe({
        next: (res: RequestBookSchema[]) =>
        {
          this.requests = res;
          console.log(this.requests);
        },
        error:(err:HttpErrorResponse)=>
        {
          this.errorMsg=err;
          console.log(this.errorMsg);
        }
      });
    }

    // receiving loging data as soon as user logs in
    if (this.library.loginData)
    {
      this.loginData=this.library.loginData;
      this.book
        .getRequestBooksForUser(this.library.loginData.loginId)
        .subscribe(
          {
            next: (res: RequestBookSchema[]) =>
            {
              this.requests = res;
              console.log(this.requests);
            },
            error:(err:HttpErrorResponse)=>
            {
              this.errorMsg=err;
              console.log(this.errorMsg);
              
            }
          });
    }
  }
}
