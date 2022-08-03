import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { BooksComponent } from './books/books.component';
import { BookitemComponent } from './books/bookitem/bookitem.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RequestbookComponent } from './requestbook/requestbook.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginPageComponent,
    RegisterComponent,
    BooksComponent,
    BookitemComponent,
    BookDetailsComponent,
    AddbookComponent,
    EditBookComponent,
    RequestbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
