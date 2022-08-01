import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LibraryService } from './library.service';
import { LoginSchema } from './models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Library';
}
