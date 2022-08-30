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
    adminData:any
    adminName: string
    adminDetail = new Subject<{}>();

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
            ,catchError((err: HttpErrorResponse) => throwError(() => err)))
    }



    // to check the admin Email and Password and pass the data
    admin(admin: { adminEmail: string, adminPassword: string })
    {
        return this.http
            .post('https://localhost:44309/adminlogin',admin)
            .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)))
    }


    // passing registered data to the server
    postRegisterUser(data: LoginSchema)
    {       
        return this.http
            .post('https://localhost:44309/register', data)
            .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)))
    }
    // get the user data
    getUserData(userId:string)
    {
        return this.http
            .get(`https://localhost:44309/userdetails/${userId}`)
            .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)))
    }
    
    // get the admin data
    getAdminData(adminId:string)
    {
        return this.http.get(`https://localhost:44309/admindetails/${adminId}`)
        .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)))
    }

    logout()
    {
        if(localStorage.getItem('jwt'))
        {
            localStorage.removeItem('userId');
            return localStorage.removeItem('jwt');
        }
        localStorage.removeItem('adminId');
        return localStorage.removeItem('adminToken');
    }


};
