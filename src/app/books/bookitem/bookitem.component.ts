import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { LibraryService } from 'src/app/library.service';
import { BookSchema } from 'src/app/models/book.model';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {

  @Input() book:BookSchema
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
  }

  onClickEvent(bookData:BookSchema)
  {
    console.log('Hello');
    
    // passing data to details page via click event
    this.bookservice.bookDetails.next(bookData);
  }

}
