import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';
import { LoginSchema } from '../models/user.model';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private book:BookService,private utilities:UtilitiesService) { }
  booksData:BookSchema[];
  loginData:LoginSchema;
  showDelMsg:boolean=this.utilities.showOnDelete;
  showAddMsg:boolean=this.utilities.showOnAdd;

  ngOnInit(): void 
  {
    this.book.getData().subscribe(res=>this.booksData=res);
  }


}
