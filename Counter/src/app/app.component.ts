import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  isDisabled=false;
  isDisabled2=false;
  msg1!:string;
  msg2!:string;
  ero =" is Even";
  colors="green";
  
  
  incr(){
    

    if(this.count>=20) {
      this.isDisabled=true;
    }
    else  {this.count++;}

    if(this.count>=20){
      this.msg1="Count cannot be greater then 20";

    }
    else{
      this.msg1="";
    }

    if(this.isEven()){
      this.ero=" is Even";
      this.colors="green";

    }
    else{
      this.ero=" is Odd";
      this.colors="red";

    }
  }


  decr(){
   
    if(this.count<=0) {
      this.isDisabled2=true;
    }
    else  {this.count--;}

    if(this.count<=0){
      this.msg1="Count cannot be smaller then 0";

    }
    else{
      this.msg1="";
    }

    if(this.isEven()){
      this.ero=" is Even";
      this.colors="green";

    }
    else{
      this.ero=" is Odd";
      this.colors="red";

    }
  }

  

  reset() {
    this.msg1="";
    this.msg2="";
    this.count=0;
    if(this.isEven()){
      this.ero=" is Even";
      this.colors="green";

    }
    else{
      this.ero=" is Odd";
      this.colors="red";

    }
  }

  isEven(){
    if(this.count%2==0){
      return true;
    }
    else{
      return false;
    }
  }
 
}
