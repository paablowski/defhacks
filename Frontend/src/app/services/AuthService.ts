import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtModule, JwtModuleOptions, JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { GLOBAL } from "../globals";
import { User } from "../models/User";

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) {
        
    }

    public requestToken(user:User): Observable<any> {

        return this.http.post(GLOBAL.url+"login", user );

    }

    public setToken(token:string) {
        localStorage.setItem('access_token', token);
    }

    public removeToken() {
        localStorage.removeItem('access_token');
    }

    public getToken(): string {
        return localStorage.getItem('access_token');
    }

    public hasToken(): boolean {
        return !this.jwtHelper.isTokenExpired();
    }

    public getExpiration(): Date {
        return this.jwtHelper.getTokenExpirationDate();
    }

}

export function getToken() {
    return localStorage.getItem('access_token');
}

export const JwtConfig: JwtModuleOptions = {
    config: {
        tokenGetter: getToken,
        whitelistedDomains: ['localhost:8080']
    }
}

export const JwtImport = JwtModule.forRoot(JwtConfig);