import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'system.html',
    providers: []
})
export class SystemComponent implements OnInit {
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {
        
    }

    public ngOnInit() {
        
    }

    public cerrarSesion() {
        // Al presionar boton cerrar sesion

        // Eliminar token
        this.authService.removeToken();

        // Volver a login
        this.router.navigate(["login"]);

    }

}