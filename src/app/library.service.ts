import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

// privides access to all components
@Injectable({
    providedIn:"root"
})

export class LibraryService 
{
    books:any=[]
    constructor(private http:HttpClient) { }
    
    getData()
    {
        return this.http
        .get("https://localhost:44309/books")
        .pipe(map(response=>
            {
                this.books=response
            }))
    }

    postData(userCredentials:{LoginEmail:string,Password:string})
    {
        return this.http.post('https://localhost:44309/login',userCredentials)
    }
};
