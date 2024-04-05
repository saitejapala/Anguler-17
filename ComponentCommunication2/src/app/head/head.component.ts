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

  count!:number;
  

  send(){
    
    this.sai.emit([this.Value1,this.Value2,this.Value3]); 
    this.Value1="";
    this.Value2="";
    this.Value3="";
  }

  incr(){
    if(this.count===undefined){
      this.count=1;
    }
    else{
      this.count++;
    }
    console.log(this.count);
  }

  decr(){
    if(this.count===undefined){
      this.count=-1;
    }
    else{
      this.count--;
    }
    console.log(this.count);
  }
  
  reset(){
    this.count=0;
    console.log(this.count);
  }
}
