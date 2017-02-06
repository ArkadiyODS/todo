import { Component, Output, EventEmitter} from '@angular/core';  
import { Task, State } from './TaskDataService';

@Component({
    selector: 'td-add-task',
    templateUrl: './addtask.component.html',
    styleUrls: ['./addtask.component.css']
})

export class AddTaskComponent{
    @Output() addTask = new EventEmitter();

    inputChange(e){ 
        this.disabled = e.target.value.trim() === '' ? true : null ;
    }

    disabled:boolean = true;

    onSubmit(input:any ){   
        if(input.title.trim() != '')
            this.addTask.emit({title: input.title, status: State.New});        
    } 
}