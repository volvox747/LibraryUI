import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';
import { LoginSchema } from '../models/user.model';

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
    this.library.getData().subscribe(res=>this.booksData=res);
  }


}
