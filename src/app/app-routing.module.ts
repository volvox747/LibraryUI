import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { RequestbookComponent } from './requestbook/requestbook.component';
import { RouteAuth } from './route-auth.service';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'register',component:RegisterComponent},
  // {path:'books', canActivate:[RouteAuth], component:BooksComponent},
  // {path:'books/add-book', canActivate:[RouteAuth], component:AddbookComponent},
  // {path:'books/:bookId', canActivate:[RouteAuth], component:BookDetailsComponent},
  // {path:'books/:bookId/update-book', canActivate:[RouteAuth], component:EditBookComponent},
  // {path:'requests', canActivate:[RouteAuth], component:RequestbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
