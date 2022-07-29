import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';
import { LoginSchema } from '../models/login.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksData:BookSchema[];
  loginData:LoginSchema;
  constructor(private library:LibraryService) { }

  ngOnInit(): void 
  {
    // console.log('From Login',this.booksData);
    // before intializing or displaying components in book page getting the data
    this.library.getData().subscribe(res=>{this.booksData=res;console.log("Inside subscribe",this.booksData);
    });
    // get the login data from services
    // this.loginData=this.library.loginData;
    // console.log('From Books',this.booksData);
    
  }


}
