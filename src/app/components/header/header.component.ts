import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
//to contain the add button to only homepage and not about

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
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  //to initialize code, like http etc
  ngOnInit(): void {
  }

  //for toggling AddTask
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route; //a true/false value
  }

}
