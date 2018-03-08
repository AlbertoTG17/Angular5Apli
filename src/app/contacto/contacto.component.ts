import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactoComponent implements OnInit {
contacto = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  saveContacto() {
    this.http.post('/contacto', this.contacto)
      .subscribe(res => {
       this.router.navigate(['/home']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
