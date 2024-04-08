import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  message="Hello iam form Child1 Component";
SendData(){
console.log("Sending message to Parent");  
}
}
