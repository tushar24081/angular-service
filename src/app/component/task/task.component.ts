import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => {
        this.tasks = tasks;
    })
  }
  taskReminder(task : Task){
    task.reminder = !task.reminder
    this.taskService.updateToggle(task).subscribe();
  }

  //we can use emit also.
  // deleteTask(task: Task){
  //   this.taskService.deleteTask(task).subscribe(() => {
  //       this.tasks = this.tasks.filter((t) => t.id !== task.id)
  //   })
  // }

}
