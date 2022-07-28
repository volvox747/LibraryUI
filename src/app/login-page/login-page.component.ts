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

  bookList:any
  constructor(private library:LibraryService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm)
  {
    this.library.postData(data.value).subscribe(()=>{
      this.router.navigate(['/books']);
    })
  }

}
