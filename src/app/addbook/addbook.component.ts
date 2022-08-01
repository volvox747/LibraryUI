import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { BookSchema } from '../models/book.model';
import {v4 as uuidv4} from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private book:BookService,private router:Router) { }

  ngOnInit(): void {
  }

  onAddBook(data:NgForm)
  {
    data.value.bookId=uuidv4();
    console.log(data.value);
    this.book.postAddBook(data.value).subscribe(res=>{
      if(res==="Book Added Successfully")
      {
        this.router.navigateByUrl('/books');
      }
    })
    
  }

}
