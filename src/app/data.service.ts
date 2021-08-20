import { Injectable } from '@angular/core';
import {  BehaviorSubject, Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  sharedDataP : BehaviorSubject<string> = new BehaviorSubject('');
  sharedDataC : BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }
}
