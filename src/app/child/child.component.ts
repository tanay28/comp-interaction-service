import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  txtChildData: any;
  dataReceived: any;
  messageFromParent = '';

 
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.txtChildData = "";
    this.dataService.sharedDataC.subscribe(data => {
      this.messageFromParent = data;
    });
  }

  sendDataToParent() {
   this.dataService.sharedDataP.next(this.txtChildData);
  }

  clearData() {
    this.messageFromParent = "";
    this.txtChildData = "";
  }
}
