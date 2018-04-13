import { Component } from "@angular/core";
import { AuthService } from "../../services/AuthService";
import { User } from "../../models/User";
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: 'login.html',
    styleUrls: ['login.css'],
    providers: []
})
export class LoginComponent {

    private user:User;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {

        this.user = new User();

    }

    onSubmit() {
        this.authService.requestToken(this.user).subscribe(
            Response => {
                let token: string = Response.token;
                if ( token != null ) {
                    // Fijar token
                    this.authService.setToken(token);

                    // Mover a nueva vista
                    this.router.navigate(["system"]);
                }
            },
            error => { }
        );
    }

}