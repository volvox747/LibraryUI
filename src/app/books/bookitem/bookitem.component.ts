import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/library.service';
import { BookSchema } from 'src/app/models/book.model';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {

  @Input() book:BookSchema
  constructor(private library:LibraryService) { }

  ngOnInit(): void {
  }

  onClickEvent(bookData:BookSchema)
  {
    // passing data to details page via click event
    this.library.bookDetails.next(bookData);
  }

}
