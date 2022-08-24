import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LibraryService } from "./library.service";

@Injectable({
    providedIn: "root"
})


export class RouteAuth implements CanActivate {
    
    constructor(private library:LibraryService,private router:Router) {}
    
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
        // if((this.library.loginData || this.library.adminName))
        if(localStorage.getItem('jwt') || localStorage.getItem('adminToken'))
        {
            return true
        }
        this.router.navigateByUrl('/')
    }
}
