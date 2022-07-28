import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private library:LibraryService) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm)
  {
    this.library.getData().subscribe(res=>console.log(res))
  }

}
