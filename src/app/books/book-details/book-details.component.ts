import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  loginId:string;
  bookId:string;
  reqId:string;
  requestBook:RequestSchema;
  constructor(private library:LibraryService,private route:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.library.bookDetails.subscribe((bookDetail:BookSchema)=>
    {
      this.bookData=bookDetail
      console.log(this.bookData);
    })
    console.log(this.library.loginData);
    
  }

  onRequest()
  {
    // get the loginId from services    
    // this.requestBook['regId']=this.library.loginData.loginId; 
    // // Generating requestId
    // this.requestBook['reqId']=uuidv4();
    // // fetching bookId from route params  
    // this.requestBook['bookId']=this.route.snapshot.params.bookId

    // posting the loginId,bookId and receiveing the requested msg
    this.library.postrequestBook({reqId:uuidv4(),regId:this.library.loginData.loginId,bookId:this.route.snapshot.params.bookId})
  }

}
