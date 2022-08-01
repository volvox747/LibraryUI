import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private library:LibraryService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm)
  {
    this.library.postData(data.value).subscribe(()=>{
      this.router.navigate(['/books']);
    })
  }

  adminLogin(data:NgForm)
  {
    if(data.value.adminEmail==="admin@gmail.com" && data.value.adminPassword==="Admin@1")
    {
      this.router.navigateByUrl('/books')
    }
  }

}
