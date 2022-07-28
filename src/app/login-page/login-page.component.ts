import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  bookList:any=[]
  constructor(private library:LibraryService) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm)
  {
    this.library.postData(data.value).subscribe(res=>{
      // for(let data in res)
      // {
      //   this.bookList.push(data);
      // }
      this.bookList=res
      console.log(this.bookList);
      
    })
    // this.library.getData().subscribe(res=>console.log(res))
  }

}
