import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { LibraryService } from '../library.service';
import {v4 as uuidv4} from 'uuid'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private library:LibraryService,private router:Router) { }

  ngOnInit(): void {
  }

  onRegister(data:NgForm)
  {
    data.value.loginId=uuidv4()
    this.library.postRegisterUser(data.value).subscribe(res=>{
      console.log(res);
      if(res==="Successfully Registered")
      {
        console.log(data.value);
        
        this.library.userData.next(data.value);
        this.router.navigateByUrl('/books');
      }
    })
  }

}
