import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/AuthService";

@Injectable()
export class SystemGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {

    }

    public canActivate(): boolean {

        if ( this.authService.hasToken() ) {

            return true;

        }

        this.router.navigate(["login"]);

        return false;

    }

}