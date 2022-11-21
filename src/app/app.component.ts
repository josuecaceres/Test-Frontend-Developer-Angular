import { Component, OnInit } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:any
  body:any
  footer:any

  constructor(public contentServ:ContentService){

  }

  ngOnInit(): void {
    this.contentServ.getTitle().subscribe(ressult => this.title = ressult.toUpperCase())
    this.contentServ.getBody().subscribe(ressult =>  this.body = ressult.toLowerCase())
    this.contentServ.getFooter().subscribe(result => this.footer = result.charAt(0).toLocaleUpperCase() + result.slice(1))
  }

}
