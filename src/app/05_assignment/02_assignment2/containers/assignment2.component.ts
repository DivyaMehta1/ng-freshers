imports:[CommonModule]
import { CommonModule } from '@angular/common';
import { Todo, AssignmentComponent } from './../../assignment.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  todos ;
  selectedRow : Number;
  getClickedRow : Function;
  constructor( arr: AssignmentComponent){
      this.todos = arr.getTodos();
      this.getClickedRow = function(index){
      this.selectedRow = index; 
  }
  
  // console.log(todos)
  }
  

}
