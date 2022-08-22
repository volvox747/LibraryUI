import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {AddbookComponent} from "./addbook/addbook.component";
import {BookRoutingModule} from "./book-routing.module";
import {BookDetailsComponent} from "./books/book-details/book-details.component";
import {BookitemComponent} from "./books/bookitem/bookitem.component";
import {BooksComponent} from "./books/books.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {RequestbookComponent} from "./requestbook/requestbook.component";

@NgModule({
    declarations:[
    BooksComponent,
    BookitemComponent,
    BookDetailsComponent,
    AddbookComponent,
    EditBookComponent,
    RequestbookComponent
    ],
    imports:[
        CommonModule,   // we use this for sub features coz, Browser Module has some other features like starting angular app so it cant be use for sub modules
        FormsModule,
        BookRoutingModule,
        RouterModule
    ] 

    // Note:
        // We dont have to use exports as the components are loaded via routing module.
})

export class BookModule { }