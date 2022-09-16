import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  ngOnInit(): void {
  }

  submitForm(){
    if(!this.text){
      alert('Please add task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.taskService.addTask(newTask).subscribe(() => {
      alert('Task has been added successfully!')
    });

    this.text = ""
    this.day = ""
    this.reminder = false
    window.location.reload();
  }

}
