import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from 'src/app/book.service';
import {LibraryService} from 'src/app/library.service';
import {BookSchema} from 'src/app/models/book.model';
import {RequestSchema} from 'src/app/models/request.model';
import {UtilitiesService} from 'src/app/utilities.service';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit
{

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
  adminToken: string
  showAlert: boolean;
  errorMsg: {flag: boolean, error: {}} = {flag: false, error: {}}

  ngOnInit(): void 
  {
    this.bookId = this.route.snapshot.params.bookId;
    this.helperFunction();
  }

  onRequest()
  {
    // posting the loginId,bookId and receiveing the requested msg
    this.book.postrequestBook({
      reqId: uuidv4(),
      regId: this.library.loginData.loginId,
      bookId: this.bookId,
      status:"pending"
    }).subscribe(
      {
        next: (res:any) =>
        {
          if (res.value === "Book Requested")
          {
            this.showAlert = true;
            setTimeout(() => this.showAlert = false, 2000);
          }
        },
        error: (err: HttpErrorResponse) =>
        {
          // the function is below
          this.errorAlertDislay(err);
        }
      });
  }

  deleteBook()
  {
    this.book.deleteBook(this.bookId).subscribe(
      {
        next: (res:any) =>
        {
          if (res.value === 'Book Deleted Successfully')
          {
            this.utilities.showOnAdd = false;
            this.utilities.showOnDelete = true;
            this.router.navigateByUrl('/books');
          }
        },
        error: (err: HttpErrorResponse) =>
        {
          // the function is below
          this.errorAlertDislay(err);
        }
      })
    }
    
    // used for displaying error alert msgs
    private errorAlertDislay(err:HttpErrorResponse)
    {
      this.errorMsg.flag = true;
      this.errorMsg.error = err.error;
      setTimeout(() => this.errorMsg.flag = false, 2000)
    }

  
  private helperFunction()
  {
    // getting book data from routerLink or navigate state

    if (history.state.bookData)
    {
      this.bookData = history.state.bookData
    }
    // data from edit book component
    else if (history.state.editedBookData)
    {
      this.bookData = history.state.editedBookData
    }

    // if user logs in
    if (this.library.loginData)
    {
      this.loginId = this.library.loginData.loginId;
    }

    // if admin logs in
    if (localStorage.getItem('adminToken'))
    {
      this.adminToken = localStorage.getItem('adminToken');
    }

    // to display the alert msg

    if (history.state.data)
    {
      this.showAlert = history.state.data;
      setTimeout(() =>
      {
        history.state.data = false
        this.showAlert = history.state.data;
      }, 2000);
    }
  }
}
