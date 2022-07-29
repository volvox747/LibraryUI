import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/library.service';
import { BookSchema } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookData:BookSchema
  constructor(private library:LibraryService) { }

  ngOnInit(): void 
  {
    this.library.bookDetails.subscribe((bookDetail:BookSchema)=>
    {
      this.bookData=bookDetail
      console.log(this.bookData);
      
    })
  }

}
