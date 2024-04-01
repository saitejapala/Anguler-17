import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PtoC';
  //(2)   Conut value updates from the templet when the AddToList() function called
  count!:number;
 //Below is how to create the arrays in the typescript
  
  // myArray: { title: string, id: number }[] = [
  //   { title: 'Object 1', id: 1 },
  //   { title: 'Object 2', id: 2 },
  //   { title: 'Object 3', id: 3 }
  // ];
  AddToList(){
    if(this.count==undefined){
      this.count=0;
      this.count++;
    }else{

      this.count++;
    }
  }
  RemoveFromList(){
    if(this.count!==0 && this.count!==undefined){

      this.count--;
    }
    
  }

  DC: { imgText_c: string; imgLink_c: string }[] = [];
  Marvel: { imgLink_c: string; imgText_c: string}[] = [];
  MonsterVerse: { imgLink_c: string; imgText_c: string}[] = [];

 count_a=0; //this is used to store the counter value from the tile child component
ValueChanged(value:number){
  
  this.count_a=this.count_a+1;
}
  //below is the constructor it is automatically clled when the AppConponent it is mainly used to initialize the values.

  constructor() {
    this.DC = [
      {
        imgText_c: "Man of Steel",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/5/50/Man_of_Steel_%28film%29_poster.jpg",
      },
      {
        imgText_c: "Batman v Superman: Dawn of Justice",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/3/31/Batman_v_Superman_Dawn_of_Justice_poster.jpg",
      },
      {
        imgText_c: "Suicide Squad",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/5/5c/Suicide_Squad_%282016_film%29_poster.png",
      },
      {
        imgText_c: "Justice League",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/6/6b/Justice_League_%28film%29_poster.jpg",
      },
      {
        imgText_c: "Wonder Woman",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/b/b0/Wonder_Woman_%282017_film%29_poster.jpg",
      },
      {
        imgText_c: "Aquamen",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg",
      },
      {
        imgText_c: "Shazam!",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/c/c2/Shazam%21_%28film%29_poster.jpg",
      },
      {
        imgText_c: "Birds of Prey",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg",
      },
      {
        imgText_c: "Wonder Woman 1984",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/4/4f/Wonder_Woman_1984_poster.png",
      },
      {
        imgText_c: "The Suicide Squad",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/0/06/The_Suicide_Squad_%28film%29_poster.jpg",
      },
      {
        imgText_c: "Black Adam",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg",
      },
      {
        imgText_c: "Shazam! Fury of the Gods",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/f/fb/Shazam%21_Fury_of_the_Gods_%282023%29_Main_Poster.png",
      },
      {
        imgText_c: "The Flash",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_%28film%29_poster.jpg",
      },
      {
        imgText_c: "Blue Beetle",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/c/c1/Blue_Beetle_poster.jpg",
      },
      {
        imgText_c: "Aquaman and the Lost Kingdom",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg",
      }
      
    ];
    this.Marvel=[
      {
        imgLink_c:"https://i.ytimg.com/vi/ZtAlt2O_t28/maxresdefault.jpg",
        imgText_c: "madem web",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
      {
        imgLink_c:"",
        imgText_c:"",
      },
    ];
    this.MonsterVerse=[
      {
        imgText_c:"Godzilla",
        imgLink_c: "https://upload.wikimedia.org/wikipedia/en/1/10/Godzilla_%282014%29_poster.jpg",
      },
      {
        imgText_c:"Kong: Skull Island",
        imgLink_c: "https://upload.wikimedia.org/wikipedia/en/3/34/Kong_Skull_Island_poster.jpg",
      },
      {
        imgText_c:"Godzilla: King of the Monsters",
        imgLink_c: "https://upload.wikimedia.org/wikipedia/en/9/9a/Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png",
      },
      {
        imgText_c:"Godzilla vs Kong",
        imgLink_c:"https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png",
      },
      
      {
        imgText_c:"Godzilla x Kong: The New Empire",
        imgLink_c: "https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg",
      }
      
    ]
  }


}
