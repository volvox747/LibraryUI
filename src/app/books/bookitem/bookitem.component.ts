import { Component, Input, OnInit } from '@angular/core';
import { BookSchema } from 'src/app/models/book.model';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {

  @Input() book:BookSchema
  constructor() { }

  ngOnInit(): void {
  }

}
