import {HttpErrorResponse} from '@angular/common/http';
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

  errorFlag: boolean // to display the error msg

  ngOnInit(): void
  {
  }

  onSubmit(data: NgForm)
  {
    console.log(data);
    this.library.postData(data.value).subscribe(
      {
        next: (res) => 
        {
          // passing data to navbar
          // [since nav bar is static at app component which is the root the data passed from the
          // login form wil be received by app component why because data through subjects can be passed to components 
          // of same URL]      
          this.errorFlag = false
          this.library.userData.next(res);
          const token: string = res.token.token
          localStorage.setItem('jwt', token); // set to local storage
          this.router.navigate(['/books']);
        },
        error: (error:HttpErrorResponse) => 
        {
          this.errorFlag = true
          console.log(error.error.detail);
        }

      })
  }



adminLogin(data: NgForm) {
  try
  {
    if (this.library.admin(data.value))
    {
      return this.router.navigate(['/books'])
    }
    throw new Error("Passowrd")
  }
  catch (error)
  {
    this.errorFlag = true
  }

}

}
