import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor
{
    private readonly token:string

    constructor()
    {
        this.token=localStorage.getItem('jwt')
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.token)
        {
            const headerRequest=req.clone({setHeaders:{"Authorize":this.token}});
            return next.handle(headerRequest);
        }
        return next.handle(req)
    }
}