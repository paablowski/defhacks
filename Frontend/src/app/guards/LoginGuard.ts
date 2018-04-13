import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/AuthService";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        
    }

    public canActivate(): boolean {
        
        if ( this.authService.hasToken() ) {

            this.router.navigate(["system"]);

            return false;

        }

        return true;

    }

}