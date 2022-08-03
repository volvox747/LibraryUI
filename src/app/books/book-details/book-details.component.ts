import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { LibraryService } from 'src/app/library.service';
import { BookSchema } from 'src/app/models/book.model';
import { RequestSchema } from 'src/app/models/request.model';
import { UtilitiesService } from 'src/app/utilities.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  // ! Commented for asking doubt
  // requestBook:RequestSchema;
  constructor(
    private library: LibraryService,
    private route: ActivatedRoute,
    private book: BookService,
    private router: Router,
    private utilities: UtilitiesService
    ) {}
    
    bookData: BookSchema;
    loginId: string = '';
    bookId: string;
    reqId: string;
    adminName: string = '';
    showEditedAlert:boolean;


  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.bookId;

    // ! Commented for asking doubt
    // to pass the corresponding book data according to id to display the details of book
    this.book.bookDetails.subscribe((bookDetail:BookSchema)=>
    {
      this.bookData=bookDetail
    })

    // if user logs in
    if (this.library.loginData) {
      this.loginId = this.library.loginData.loginId;
      console.log(this.loginId);
    }

    // if admin logs in
    if (this.library.adminName) {
      this.adminName = this.library.adminName;
    }

    this.utilities.showOnEdit.subscribe((showOnEdit:boolean)=>this.showEditedAlert=showOnEdit)
    
    // ! Commented for asking doubt
    // to receive the passed admin name from login component
    // with this data we can display yhe edit,delete button using ngIf directive
    this.library.adminDetail.subscribe(
    (adminData:{adminName:string,adminEmail:string})=>
    {
      this.adminName=adminData.adminName;
    })
  }

  onRequest() {
    // posting the loginId,bookId and receiveing the requested msg
    this.book.postrequestBook({
      reqId: uuidv4(),
      regId: this.library.loginData.loginId,
      bookId: this.bookId,
    }).subscribe(res=>{
      if(res==="Book Requested")
      {
        this.showEditedAlert=false;
        this.showEditedAlert=true;
      }
    });
  }

  deleteBook() {
    this.book.deleteBook(this.bookId).subscribe((res) => {
      if (res === 'Book Deleted Successfully') {
        this.utilities.showOnAdd=false;
        this.utilities.showOnDelete=true; 
        this.router.navigateByUrl('/books');
      }
    });
  }
}
