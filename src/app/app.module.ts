import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptor } from './auth-intercepter.service';
import { BookModule } from './book.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginPageComponent,
    RegisterComponent,
    // BooksComponent,
    // BookitemComponent,
    // BookDetailsComponent,
    // AddbookComponent,
    // EditBookComponent,
    // RequestbookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BookModule
  ],
  //! commented out due to some error
  // providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
