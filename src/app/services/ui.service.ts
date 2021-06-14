import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //function to toggle the show add task
  //set to void because returning nothing
  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask; //stating the state of the add task, true/false
    this.subject.next(this.showAddTask);
    //Setting the current state of the add task - true/false
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
    //observing the addTask through (subscribe)
  }

}
