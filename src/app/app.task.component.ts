import { Component, Input, Output, EventEmitter} from '@angular/core';  
import { Task, State } from './TaskDataService'; 

@Component({
    selector: 'td-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent{
    @Input() task: EditableTask;
    @Output() change = new EventEmitter(); 
    @Output() delete = new EventEmitter(); 
    private tempTitle: string;

    ngOnInit(){
        this.task.rename = false;
    }

    toChange(){
        this.change.emit(this.task);
    }

    toDelete(){
        this.delete.emit(this.task);
    }

    toSubmit(submitType:string){
        switch(submitType){
            case 'save':
                this.onRename();
                this.toChange();
                break;
            case 'cancel':
                this.task.title = this.tempTitle;
                this.onRename();
                break;
            case 'delete':
                this.toDelete();
                break;
        }
    }

    onChecked(checked: boolean){
        this.task.status = checked ? State.Done : State.New;
        this.toChange();
    }

    onRename(){
        this.tempTitle =  this.task.title;
        if(this.task.title == '')
            this.toDelete();
        this.task.rename = !this.task.rename;
    }

    rename(text:string){
        this.task.title = text;
        this.toChange();
    } 
}

interface EditableTask extends Task{
    rename:boolean;
}