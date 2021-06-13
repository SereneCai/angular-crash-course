import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'; //import the interface
import {TaskService} from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; //set to an empty array when using service

  constructor(private taskService : TaskService) { } //set the arg to reference taskservice imported from services

  //fires off right away
  ngOnInit(): void {
    //where this.tasks is an array you set
    //usually observable is used for server related sinetad of this.tasks = this.taskService.getTasks(); format
    this.taskService.getTasks().subscribe((tasks) =>
      this.tasks = tasks);
    //for observable, have to use subscribe to 'keep watch' of the tasks
  }

    //single object, so instead of Task[] it will be just set to Task
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() =>
      this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    console.log(task.reminder);
  }

}
