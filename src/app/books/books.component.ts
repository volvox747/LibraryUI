import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksData:BookSchema[]
  constructor(private library:LibraryService) { }

  ngOnInit(): void 
  {
    this.booksData=[];
    this.library.getData().subscribe(res=>this.booksData=res);
  }


}
