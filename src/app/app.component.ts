import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import {SessionStorageService, LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  cookieValue = 'Anil Singh';
  


  constructor(private cookieService: CookieService, private localStorage:LocalStorageService,
              private sessionStorage: SessionStorageService){
    
  }

  ngOnInit(): void {
    //Set cookies
    this.cookieService.set('cookieApp', 'La cookie flama' );
    //Get Cookies
    //this.cookieValue = this.cookieService.get('cookieApp');

    this.localStorage.store("Local", "Parametro en local");

    this.sessionStorage.store("Sesion", "Parametro en sesion");

  }
}
