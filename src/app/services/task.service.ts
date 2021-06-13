import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../Task'; //import the interface
// import {TASKS} from '../mock-tasks'; - no longer required, data coming from server

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"; //where the data is gonna be drawn

  //to be able to use http, have to identify
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{ //identifying this as an array for this function
    // const tasks = of(TASKS); //use of word to 'wrap' the tasks //http returns observable automatically, and is ahndle the same way
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
    //refer to constructor (http)
    //no longer need of / mock-tasks
  }

  deleteTask(task: Task): Observable<Task>{
    //make a delete request to server to delete
    const url = `${this.apiUrl}/${task.id}`; //setting the url for delete req
    return this.http.delete<Task>(url);
  }
}
