import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task?:Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor(private taskService: TaskService) { }

  deleting(task: Task){
    // this.onDeleteTask.emit(task);

    this.taskService.deleteTask(task).subscribe(() => {
      
      window.location.reload();
    })

  }
  ngOnInit(): void {
  }

}
