import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent }  from './app.component';
import {TaskDataService } from './TaskDataService';
import { TaskComponent } from './app.task.component';
import { AddTaskComponent } from './app.addtask.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,TaskComponent, AddTaskComponent],
  providers: [ TaskDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
