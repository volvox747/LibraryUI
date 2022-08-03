import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LibraryService } from '../library.service';
import { RequestBookSchema } from '../models/requestbook.model';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {

  constructor(private library:LibraryService,private book:BookService) { }
  requests:RequestBookSchema[]

  ngOnInit(): void 
  {
    if(this.library.adminName)
    {
      this.book.getRequestBooksForAdmin().subscribe((res:RequestBookSchema[])=>{
        this.requests=res
        console.log(this.requests);
        
      })
    }

    // receiving loging data as soon as user logs in
    if(this.library.loginData)
    {
      this.book.getRequestBooksForUser(this.library.loginData.loginId).subscribe((res)=>{
        this.requests=res
        console.log(this.requests);
        
      })

      //! Commnetd for asking doubt
    // this.library.userData.subscribe(loginData=>{
    //   console.log(loginData);
      
    //   if(loginData)
    //     this.requests=loginData;
    // })

    }
  }

}
