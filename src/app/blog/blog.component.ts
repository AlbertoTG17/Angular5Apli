import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('/blog').subscribe(data => {
    this.blog = data;
  });
}

}

