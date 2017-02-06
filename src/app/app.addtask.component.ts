import { Component, Output, EventEmitter} from '@angular/core';  
import { Task, State } from './TaskDataService';
import { NgForm } from '@angular/forms';

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

    onSubmit(form){   
        if(form.value.title.trim() != ''){  
            this.addTask.emit({title: form.value.title, status: State.New}); 
        
        }  
    }
}