import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { LoginSchema } from '../models/login.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() login:LoginSchema
  constructor( private library :LibraryService) { }

  ngOnInit(): void {
    // this.library.
  }

}
