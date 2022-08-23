import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Subject, throwError } from "rxjs";
import { LoginSchema } from "./models/user.model";

// privides access to all components
@Injectable({
    providedIn: "root"
})

export class LibraryService 
{
    loginData: LoginSchema;
    adminName: string
    adminDetail = new Subject<{ adminName: string, adminEmail: string }>();

    // to pass the login data to nav bar
    userData = new Subject<LoginSchema>();

    constructor(private http: HttpClient) { }


    // post the login data and receive its corresponding data
    postData(userCredentials: { LoginEmail: string, Password: string })
    {
        // post and get the login credentials
        return this.http
            .post<LoginSchema>('https://localhost:44309/login', userCredentials)
            .pipe(map(res => this.loginData = res[0])
            ,catchError((err: HttpErrorResponse) =>
            {
                return throwError(() => err)
            }))
    }



    // to check the admin Email and Password and pass the data

    admin(admin: { adminEmail: string, adminPassword: string }): boolean
    {
        if (admin.adminEmail === "admin@gmail.com" && admin.adminPassword === "Admin@1")
        {
            // used for displaying buttons in book-details component
            this.adminName = "Library Admin";
            this.adminDetail.next({ adminName: this.adminName, adminEmail: "Library Email" });
            return true
        }
        return false
    }


    // passing registered data to the server
    postRegisterUser(data: LoginSchema)
    {
        const headers=new HttpHeaders()
        headers.set('Content-Type','application/json')
        headers.set("Control-Allow-Origin", "*")
        // sending email
        this.http.post('https://formspree.io/f/xlevdeva',
            {Email:data.loginEmail,Password:data.loginPassword},
            {'headers':headers}).subscribe(res=>console.log(res)
            );
        
        return this.http.post('https://localhost:44309/register', data)
    }


    logout()
    {
        localStorage.removeItem('jwt');
    }


};
