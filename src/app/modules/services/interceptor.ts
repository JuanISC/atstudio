import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let auth_token = "ya29.A0AVA9y1uo6yLtLzquSxoEpP9VIjFnZYXk0stKGnQiHBzTOl9KvaTPopTLOtt68yi-w4ILSlwjPfMFEX7vgAp0TORNcT0yNl5ugtkHKeaguy9KycQCfnuoJcnz2co387wdL5sGigGT9fBiA4CuqlNthxfqQQ8oYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4VWh4SEw2ckIzV2ZrUFc1T0JmM2hGdw0163";

        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth_token}`
            }
        })

        console.log(req)


        return next.handle(req);
    }

}
