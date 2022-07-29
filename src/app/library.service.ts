import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { BookSchema } from "./models/book.model";

// privides access to all components
@Injectable({
    providedIn:"root"
})

export class LibraryService 
{
    books:BookSchema[];
    bookDetails=new Subject<BookSchema>();
    constructor(private http:HttpClient) { }
    
    getData()
    {
        return this.http
        .get<BookSchema[]>("https://localhost:44309/books")
    }

    postData(userCredentials:{LoginEmail:string,Password:string})
    {
        return this.http
            .post<BookSchema[]>('https://localhost:44309/login',userCredentials)
            .pipe(map(res=>
            {
                this.books=[];
                this.books=res;
                console.log(this.books);
            }))
    }
};
