import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { PageModule } from './pages/pages.module';

import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token') || '';
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    PageModule,
    ModelModule,
    FormsModule,
    
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
