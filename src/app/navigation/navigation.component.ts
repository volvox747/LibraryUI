import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { LoginSchema } from '../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  adminDetail = {};
  userDetail = {};
  constructor(private library: LibraryService) { }

  ngOnInit(): void 
  {
    // to pass admin data
    this.library.adminDetail.subscribe(
      (adminData: { adminName: string; adminEmail: string }) => {
        this.adminDetail = adminData;
      }
    );
    // to pass user data
    this.library.userData.subscribe(
      (loginData: LoginSchema) => {
        this.userDetail = loginData
      }
    );
  }


  logout()
  {
    this.library.logout();
  }
}
