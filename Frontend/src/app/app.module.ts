import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { SystemModule } from './components/system/system.module';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './services/AuthInterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService, JwtImport } from './services/AuthService';
import { LoginGuard } from './guards/LoginGuard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    MaterializeModule,
    SystemModule,
    JwtImport
  ],
  providers: [
    appRoutingProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
