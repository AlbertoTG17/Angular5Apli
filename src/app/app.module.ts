import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { CookieService } from 'ngx-cookie-service';

import {SessionStorageService, LocalStorageService} from 'ngx-webstorage';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'blogs',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    data: { title: 'Servicios' }
  },
  {
    path: 'contactos',
    component: ContactoComponent,
    data: { title: 'Contacto' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**',
  component: ErrorComponent,
  data: { title: 'Contacto' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ServiciosComponent,
    ContactoComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [CookieService,LocalStorageService,SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
