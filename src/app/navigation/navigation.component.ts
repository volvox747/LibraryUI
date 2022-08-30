import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { LoginSchema } from '../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit
{
  adminDetail:string="";
  userDetail:string="";
  constructor(private library: LibraryService) { }

  ngOnInit(): void 
  {
    // to pass admin data
    this.library.adminDetail.subscribe(
      (adminData:{adminId?:string,adminName:string}) =>
      {
        console.log(adminData);
        this.adminDetail = adminData.adminName;
      }
    );
    // to pass user data
    this.library.userData.subscribe((loginData: LoginSchema) => 
    {
      console.log(loginData);
      
      this.userDetail = loginData.loginName;
    })
  }


  logout()
  {
    this.library.logout();
  }
}
