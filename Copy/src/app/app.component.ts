import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Copy';
  name!:string;//   ! indicates the value is not initialised :string indicates the name variable can take only string datatype
  em!:string;
  pass!:string;
  show(){
    alert(`Hello ${this.name} check your credentials\n Email: ${this.em}\n Password: ${this.pass}`);
    this.name="";
    this.em="";
    this.pass="";

  }
}
