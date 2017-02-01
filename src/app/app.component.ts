import { Component } from '@angular/core';
import { TaskDataService, Task } from './TaskDataService';
import { TaskComponent } from './app.task.component';
import { AddTaskComponent } from './app.addtask.component';
 
@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls:['./todolist.component.css']
})
export class AppComponent  { 
  
  constructor(private taskService: TaskDataService){
   
  }
  ngOnInit(){
     this.taskList = this.taskService.getTasks();
  }


  onChange(task: Task){
    this.taskService.saveTask(task);
  }

  onDelete(task: Task){
    this.taskService.deleteTask(task);
  }

  onTaskAdded(task: Task){
    this.taskService.addTask(task);
  }
  
  taskList: Task[];

  name = 'Todo list'; 

}
