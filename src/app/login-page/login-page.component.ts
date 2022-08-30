import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit
{
  constructor(private library: LibraryService, private router: Router) { }

  adminErrorFlag: boolean // to display the error msg
  userErrorFlag: boolean // to display the error msg

  ngOnInit(): void
  {
  }

  onSubmit(data: NgForm)
  {
    this.library.postData(data.value).subscribe(
      {
        next: (res) => 
        {
          // passing data to navbar
          // [since nav bar is static at app component which is the root the data passed from the
          // login form wil be received by app component why because data through subjects can be passed to components 
          // of same URL]      
          this.userErrorFlag = false
          this.library.userData.next(res);
          const token: string = res.token.token
          localStorage.setItem('jwt', token); // set to local storage
          localStorage.setItem('userId',res.loginId)
          this.router.navigate(['/books']);
        },
        error: (error: HttpErrorResponse) => 
        {
          this.userErrorFlag = true
          console.log(error.error.detail);
        }

      })
  }



  adminLogin(data: NgForm) 
  {
    this.library.admin(data.value).subscribe(
      {
        next: (res:any) => 
        {
          console.log(res);
          
          // passing data to navbar
          // [since nav bar is static at app component which is the root the data passed from the
          // login form wil be received by app component why because data through subjects can be passed to components 
          // of same URL]      
          this.adminErrorFlag = false
          const token: string = res.token.token
          localStorage.setItem('adminToken', token); // set to local storage
          localStorage.setItem('adminId',res.adminId)
          this.library.adminDetail.next(res)
          this.router.navigate(['/books']);
        },
        error: (error: HttpErrorResponse) => 
        {
          this.adminErrorFlag = true
          console.log(error.error.detail);
        }
      }
    )

    // try
    // {
    //   if (this.library.admin(data.value))
    //   {
    //     localStorage.setItem('adminToken',JSON.stringify(data.value));
    //     return this.router.navigate(['/books'])
    //   }
    //   throw new Error("Passowrd")
    // }
    // catch (error)
    // {
    //   this.errorFlag = true
    // }

  }

}
