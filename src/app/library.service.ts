import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

// privides access to all components
@Injectable({
    providedIn:"root"
})

export class LibraryService 
{
    private url="https://localhost:44345/api/department"
    dept=[]
    constructor(private http:HttpClient) { }
    
    getData()
    {
        return this.http
        .get<{DepId:number,DeptName:string}[]>(this.url)
        .pipe(map(response=>
            {
                this.dept=response
                return this.dept
            }))
    }
};
