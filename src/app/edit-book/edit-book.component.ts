import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {BookSchema} from '../models/book.model';
import {UtilitiesService} from '../utilities.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit
{

  bookData: BookSchema
  constructor(private book: BookService, private route: ActivatedRoute, private router: Router, private utilities: UtilitiesService) {}

  errorMsg:{flag:boolean,error:{}} ={flag:false,error:{}};

  ngOnInit(): void 
  {
    // filter book from book details array using id
    this.bookData = this.book.books.filter(book => book.bookId === this.route.snapshot.params.bookId)[0];
  }

  onEditBook(data: NgForm)
  {
    // adding unique id to book
    data.value.bookId=this.bookData.bookId
    
    this.book.updateBook(data.value).subscribe(
      {
        next: (res:any) =>
        {
          if (res.value === "Book Updated Successfully")
          {
            this.router.navigateByUrl(`/books/${this.route.snapshot.params.bookId}`, {state: {data: true, editedBookData: this.bookData}})
          }
        },
        error: (err:HttpErrorResponse) =>
        {
          this.errorAlertDisplay(err)
        }
      });
  }
  private errorAlertDisplay(err: HttpErrorResponse)
  {
    this.errorMsg.flag = true
    this.errorMsg.error = err.error
    setTimeout(() => this.errorMsg.flag = false, 2000);
  }

}
