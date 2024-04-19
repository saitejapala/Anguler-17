import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  products:any[]=[];
  hoveredProductId:number|null=null;//  | tells the productId can be number or null
  constructor(){
   fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(data=>{this.products=data;console.log(this.products)});
}

onMouseEnter(productId:number){
this.hoveredProductId=productId;
}

onMouseLeave(){
  this.hoveredProductId=null;
  }
}

