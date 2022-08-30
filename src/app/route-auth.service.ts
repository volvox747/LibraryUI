import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LibraryService } from "./library.service";
import { LoginSchema } from "./models/user.model";

@Injectable({
    providedIn: "root"
})


export class RouteAuth implements CanActivate
{

    constructor(private library: LibraryService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
        if (localStorage.getItem('jwt'))
        {
            if (this.library.loginData)
            {
                return true
            }
            this.library.getUserData(localStorage.getItem('userId'))
                .subscribe((res: LoginSchema) =>
                {
                    this.library.loginData = res;
                    this.library.userData.next(res)
                })
            return true
        }
        if (localStorage.getItem('adminToken'))
        {
            this.library.getAdminData(localStorage.getItem('adminId'))
                .subscribe((res:{adminId?:string,adminName:string}) => this.library.adminDetail.next(res));
            return true
            
        }
        // this is done to erase the data in the navbar when there is not token in storage
        // when user being logged out access the navbar tabs in the navbar
        // the page should render to login page due to route gaurd but the data dont get erased in
        // navbar. So to erase the data we have changed the loginData object properties
        if (this.library.loginData)
        {
            this.library.userData.next({...this.library.loginData,loginName:""});
        }
        this.library.adminDetail.next({adminName:""});
        
        this.router.navigateByUrl('/');

    }
}
