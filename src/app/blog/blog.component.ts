import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  libros: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("Entra en inti del componente");
    this.http.get('/book').subscribe (data => {
      this.libros = data;
      console.log("Data: " + data.toString());
    });
  
  }

}
