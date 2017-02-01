import { Injectable  }  from '@angular/core'

export enum State{
    New = 0, Done = 1
}

export interface Task {
    title:string;
    status:State;
}

@Injectable()
export class TaskDataService{
    private storage = window.localStorage;
    private storageName = 'todo-list';
    taskList:Task[];

    constructor(){
       // window.localStorage.removeItem(this.storageName);
       let data = this.storage.getItem(this.storageName);
       if(data == null || undefined )
            this.taskList = [];
        else{
            this.taskList = JSON.parse(data);
            if(this.taskList == undefined || null)
                throw "Error! Can't parse localStorage";
        }
    }
    
    getTasks():Task[]{
        return this.taskList;
    }
    addTask(task:Task):void{
        this.taskList.unshift(task);
        this.saveToStorage();
    }

    saveToStorage(){
        this.storage.setItem(this.storageName,JSON.stringify(this.taskList));  
    }

    deleteTask(task:Task):void{
        let index = this.taskList.indexOf(task);
        if(index > -1){
            this.taskList.splice(index,1);
            this.saveToStorage(); 
        }
    }

    saveTask(task:Task):void{
        let index = this.taskList.indexOf(task);
        if(index > -1){
            this.taskList[index] = task;
            this.saveToStorage(); 
        }
    }

}

