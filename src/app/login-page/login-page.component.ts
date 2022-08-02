import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LibraryService } from '../library.service';
import { BookSchema } from '../models/book.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {



  constructor(private library:LibraryService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm)
  {
    this.library.postData(data.value).subscribe((res)=>{   
      // passing data to navbar
      this.library.userData.next(res);
      this.router.navigate(['/books']);
    })
  }

  adminLogin(data:NgForm)
  {
    console.log(data.value);
    if(this.library.admin(data.value))
    {
        this.router.navigate(['/books'])
    }
    
    // if(data.value.adminEmail==="admin@gmail.com" && data.value.adminPassword==="Admin@1")
    // {
    //   this.library.adminDetail.next({adminName:"Library Admin",adminEmail:"Library Email"});
    //   this.library.adminDetail.next({adminName:"Library Admin",adminEmail:"Library Email"});
    //   this.router.navigateByUrl('/books')
    // }
    
  }

}
