import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactoComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  saveContacto() {
    console.log("Entrando");
    this.http.post('/book', this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/contacto', id]);
        }, (err) => {
          console.log(err);
        }

      );
  }

}
