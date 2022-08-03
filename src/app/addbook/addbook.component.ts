import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { BookSchema } from '../models/book.model';
import {v4 as uuidv4} from 'uuid';
import { Router } from '@angular/router';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private book:BookService,private router:Router,private utilities:UtilitiesService) { }

  ngOnInit(): void {
  }

  onAddBook(data:NgForm)
  {
    data.value.bookId=uuidv4();
    console.log(data.value);
    this.book.postAddBook(data.value).subscribe(res=>{
      if(res==="Book Added Successfully")
      {
        // since we are binding both delete as well as add contents on same page. we need to disable delete
        // and enable add so that the data wont be overlapped with existing data.
        this.utilities.showOnDelete=false;
        this.utilities.showOnAdd=true;
        this.router.navigateByUrl('/books');
      }
    })
    
  }

}
