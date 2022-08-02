import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
// import { BookSchema } from "./models/book.model";
import { LoginSchema } from "./models/user.model";
// import { RequestSchema } from "./models/request.model";

// privides access to all components
@Injectable({
    providedIn:"root"
})

export class LibraryService 
{
    // books:BookSchema[];
    // bookDetails=new Subject<BookSchema>();
    loginData:LoginSchema;
    adminName:string
    adminDetail=new Subject<{adminName:string,adminEmail:string}>();
    // to pass the login data to nav bar
    userData=new Subject<LoginSchema>();
    
    constructor(private http:HttpClient) { }
    
    
    // post the login data and receive its corresponding data
    postData(userCredentials:{LoginEmail:string,Password:string})
    {
        // post and get the login credentials
        return this.http
            .post<LoginSchema>('https://localhost:44309/login',userCredentials)
            .pipe(map(res=>this.loginData=res[0]))
    }

    // to check the admin Email and Password and pass the data

    admin(admin:{adminEmail:string,adminPassword:string}) :boolean
    {
        if(admin.adminEmail==="admin@gmail.com" && admin.adminPassword==="Admin@1")
        {
            // used for displaying buttons in book-details component
            this.adminName="Library Admin";
            this.adminDetail.next({adminName:this.adminName,adminEmail:"Library Email"});
            return true
        }
        return false
    }
    
    
    
    postRegisterUser(data:LoginSchema)
    {
        return this.http.post('https://localhost:44309/register',data)
    }
    
    // // Get All Books Details
    // getData()
    // {
    //     return this.http
    //     .get<BookSchema[]>("https://localhost:44309/books")
    // }
    
    // // post the request of book along with loginId and get requested msg

    // postrequestBook(requestData:RequestSchema)
    // {
    //     this.http
    //         .post('https://localhost:44309/request-book',requestData)
    //         .subscribe(res=>console.log(res))
    // }

};
