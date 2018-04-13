import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpHandler,
    HttpEvent,
    HttpRequest,
    HTTP_INTERCEPTORS 
 } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { getToken } from "./AuthService";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor( ) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Solicitar token
        let token:string = getToken();

        // Validar que el token exista
        if ( token != null && token.length > 0 ) {
            // Pasar petición al siguiente interceptor
            return next.handle( request.clone({ setHeaders: { Authorization: token } }) );
        }
        
        // No modificar petición actual
        return next.handle(request);

    }

}