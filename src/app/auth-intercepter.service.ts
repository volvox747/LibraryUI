import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor
{
    
    private token:string
    constructor()
    {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('jwt'))
            this.token=localStorage.getItem('jwt')
        if(localStorage.getItem('adminToken'))
            this.token=localStorage.getItem('adminToken');
        
        if(this.token)
        {
            const headerRequest=req.clone({setHeaders:{"Authorization":"Bearer "+this.token}});
            return next.handle(headerRequest);
        }
        return next.handle(req)
    }
}