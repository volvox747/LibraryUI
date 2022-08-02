import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'register',component:RegisterComponent},
  {path:'books',component:BooksComponent},
  {path:'books/:bookId',component:BookDetailsComponent},
  {path:'add-book',component:AddbookComponent},
  {path:'books/:bookId/update-book',component:EditBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
