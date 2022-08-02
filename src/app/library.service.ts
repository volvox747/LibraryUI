import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { BookSchema } from "./models/book.model";
import { LoginSchema } from "./models/user.model";
import { RequestSchema } from "./models/request.model";

// privides access to all components
@Injectable({
    providedIn:"root"
})

export class LibraryService 
{
    books:BookSchema[];
    loginData:LoginSchema;
    bookDetails=new Subject<BookSchema>();
    adminDetail=new Subject<{adminName:string,adminEmail:string}>();
    // to pass the login data to nav bar
    userData=new Subject<LoginSchema>();
    
    constructor(private http:HttpClient) { }
    
    getData()
    {
        return this.http
        .get<BookSchema[]>("https://localhost:44309/books")
    }

    // post the login data and receive its corresponding data
    postData(userCredentials:{LoginEmail:string,Password:string})
    {
        // post and get the login credentials
        return this.http
            .post<LoginSchema>('https://localhost:44309/login',userCredentials)
            .pipe(map(res=>this.loginData=res[0]))
    }

    // post the request of book along with loginId and get requested msg

    postrequestBook(requestData:RequestSchema)
    {
        this.http
            .post('https://localhost:44309/request-book',requestData)
            .subscribe(res=>console.log(res))
    }

    postRegisterUser(data:LoginSchema)
    {
        return this.http.post('https://localhost:44309/register',data)
    }
};
