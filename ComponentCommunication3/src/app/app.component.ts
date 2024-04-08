import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComponentCommunication3';

  ReciveMessage(msg:string){
    console.log("Received message from child:  ",msg);
  }
}
