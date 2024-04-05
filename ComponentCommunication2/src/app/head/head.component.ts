import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  @Output() sai=new EventEmitter();
  Value1!:string;
  Value2!:string;
  Value3!:string;
  

  send(){
    
    this.sai.emit([this.Value1,this.Value2,this.Value3]);
    this.Value1="";
    this.Value2="";
    this.Value3="";
  }
}
