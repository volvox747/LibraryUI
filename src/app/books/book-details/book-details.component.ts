import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { LibraryService } from 'src/app/library.service';
import { BookSchema } from 'src/app/models/book.model';
import { RequestSchema } from 'src/app/models/request.model';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookData:BookSchema
  loginId:string="";
  bookId:string;
  reqId:string;
  adminName:string="";
  
  // ! Commented for asking doubt
 // requestBook:RequestSchema;
  constructor(private library:LibraryService,private route:ActivatedRoute,private book :BookService,private router:Router) { }

  ngOnInit(): void 
  {
    this.bookId=this.route.snapshot.params.bookId

  // ! Commented for asking doubt
    // this.book.bookDetails.subscribe((bookDetail:BookSchema)=>
    // {
    //   console.log(bookDetail);
      
    //   this.bookData=bookDetail
    // })
    // console.log(this.bookData);
    
    
    // if user logs in 
    if(this.library.loginData)
    {
      this.loginId=this.library.loginData.loginId
      console.log(this.loginId);
      
    }

// if admin logs in 
    if(this.library.adminName)
    {
      this.adminName=this.library.adminName
    }


    // ! Commented for asking doubt
    // this.library.adminDetail.subscribe(
    // (adminData:{adminName:string,adminEmail:string})=>
    // {
    //   console.log(adminData);
      
    //   this.adminName=adminData.adminName;
    //   console.log(this.adminName);
      
    // })
    
  }

  onRequest()
  {
    // posting the loginId,bookId and receiveing the requested msg
    this.book.postrequestBook({reqId:uuidv4(),regId:this.library.loginData.loginId,bookId:this.bookId})
  }

  deleteBook()
  {
    this.book.deleteBook(this.bookId).subscribe(res=>{
      if(res==="Book Deleted Successfully")
      {
        this.router.navigateByUrl('/books')
      }
    })
  }

}
