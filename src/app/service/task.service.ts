import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-task';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Task } from 'src/app/Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl = "http://localhost:3000/tasks"
  constructor(private http: HttpClient) { }
  
  // Observables provide support for sharing data between the publishers and subscribers in an Angular application.
  getTask() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  //we will get the task object we want to remove. We will get it's id -> and we'll just use delete method of httpClient
  deleteTask(task : Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  } 

  updateToggle(task : Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  addTask(task: Task){
    return this.http.post(this.apiUrl, task);
  }
}
