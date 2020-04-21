import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
    //handler// display result via string interpolation
    values = "";
    onKey(value:string) {
      this.values = value;
    }

}
