import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BookService} from '../book.service';
import {BookSchema} from '../models/book.model';
import {v4 as uuidv4} from 'uuid';
import {Router} from '@angular/router';
import {UtilitiesService} from '../utilities.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit
{

  constructor(private book: BookService, private router: Router, private utilities: UtilitiesService) {}

  errorMsg: {flag: boolean, error: {}} = {flag: false, error: {}}

  ngOnInit(): void
  {
  }

  onAddBook(data: NgForm)
  {
    // adding unique to book
    data.value.bookId=uuidv4();

    this.book.postAddBook(data.value).subscribe(
      {
        next: (res:any) =>
        {
          if (res.value === "Book Added Successfully") 
          {
            // since we are binding both delete as well as add contents on same page. we need to disable delete
            // and enable add so that the data wont be overlapped with existing data.
            this.utilities.showOnDelete = false;
            this.utilities.showOnAdd = true;
            this.router.navigateByUrl('/books');
          }
        },
        error: (err: HttpErrorResponse) =>
        {
          this.errorAlertDisplay(err)
        }
      })

  }

  private errorAlertDisplay(err: HttpErrorResponse)
  {
    this.errorMsg.flag = true
    this.errorMsg.error = err.error
    setTimeout(() => this.errorMsg.flag = false, 2000);
  }

}
