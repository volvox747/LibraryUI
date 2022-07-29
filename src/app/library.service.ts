import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { BookSchema } from "./models/book.model";
import { LoginSchema } from "./models/login.model";

// privides access to all components
@Injectable({
    providedIn:"root"
})

export class LibraryService 
{
    books:BookSchema[];
    loginData:LoginSchema;
    bookDetails=new Subject<BookSchema>();
    constructor(private http:HttpClient) { }
    
    getData()
    {
        return this.http
        .get<BookSchema[]>("https://localhost:44309/books")
    }

    postData(userCredentials:{LoginEmail:string,Password:string})
    {
        // post and get the login credentials
        return this.http
            .post<LoginSchema>('https://localhost:44309/login',userCredentials)
            .pipe(map(res=>this.loginData=res))
    }
};
