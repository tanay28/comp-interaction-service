import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data : any;
  parentData : string;
  dataReceived: any;

  constructor( private dataService :  DataService ) {}
  ngOnInit(): void {
    this.dataReceived = "";
    this.dataService.sharedDataP.subscribe(data => {
      this.dataReceived = data;
    });
  }
  sendData() {
    this.dataService.sharedDataC.next(this.data)
  }

  clearData() {
    this.dataReceived = "";
    this.data = "";
  }
}
