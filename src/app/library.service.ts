import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { BookSchema } from "./models/book.model";

// privides access to all components
@Injectable({
    providedIn:"root"
})

export class LibraryService 
{
    books:BookSchema[];
    constructor(private http:HttpClient) { }
    
    getData()
    {
        return this.http
        .get<BookSchema[]>("https://localhost:44309/books")
        .pipe(map(response=>
            {
                this.books=response
            }))
    }

    postData(userCredentials:{LoginEmail:string,Password:string})
    {
        return this.http
            .post<BookSchema[]>('https://localhost:44309/login',userCredentials)
            .pipe(map(res=>
            {
                this.books=[];
                this.books=res;
            }))
    }
};
