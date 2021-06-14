import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription : Subscription; //to watch showaddtask true/false to toggle

    //to use service, have to declare in constructor
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  //to initialize code, like http etc
  ngOnInit(): void {
  }

  //for toggling AddTask
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
