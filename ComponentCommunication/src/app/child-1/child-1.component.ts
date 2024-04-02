import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component {
  //Value for the below img variable we can get it fro the parent component i.e.,(app.component) it will become like 
  @Input() imglink!: string;
  @Input() imgname!:string;
}
