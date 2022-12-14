import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import {v4 as uuidv4} from 'uuid'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private library:LibraryService,private router:Router) { }

  ngOnInit(): void {
  }
  errorMsg: {flag: boolean, error: {}} = {flag: false, error: {}}

  onRegister(data:NgForm)
  {
    data.value.loginId=uuidv4()
    this.library.postRegisterUser(data.value).subscribe((res:any)=>
    {
      console.log(res);
      
      if(res.value==="Successfully Registered")
      {        
        // this.library.userData.next(data.value);
        this.router.navigateByUrl('/books');
      }
    })
  }

}
