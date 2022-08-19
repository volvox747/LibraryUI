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
  showDelMsg:boolean
  showAddMsg:boolean
  
  ngOnInit(): void 
  {
    // this function is to hide the display msgs
    this.hideAlert()
    this.book.getData().subscribe(res=>this.booksData=res);
  }
  
  private hideAlert()
  {
    this.showDelMsg=this.utilities.showOnDelete;
    this.showAddMsg=this.utilities.showOnAdd;
    // if delete alert is displayed, hide after 2 sec
    if(this.utilities.showOnDelete)
    {
    setTimeout(() => {
        this.utilities.showOnDelete=false
        this.showDelMsg=this.utilities.showOnDelete;
      }, 2000);    
      console.log(this.showDelMsg,this.utilities.showOnDelete);
    }
    // if add alert is displayed, hide after 2 sec
    if(this.utilities.showOnAdd)
    {
    setTimeout(() => {
        this.utilities.showOnAdd=false
        this.showAddMsg=this.utilities.showOnAdd
      }, 2000);    
      console.log(this.showAddMsg,this.utilities.showOnAdd);
    }
    
  }


}
