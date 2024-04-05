import { Component, ViewChild } from '@angular/core';
import { HeadComponent } from './head/head.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComponentCommunication2';
  ValueArr:string[]=[];
  myArray: string[] = ['value1', 'value2', 'value3'];
  

  prints(values:any){
    // console.log(values);
    this.ValueArr=values;
    // console.log(this.ValueArr);
  }
  @ViewChild(HeadComponent) vc!: HeadComponent;
  count!:number;
  recevie(){

    this.count=this.vc.count;
  }
}
