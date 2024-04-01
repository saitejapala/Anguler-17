import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //(3)   Gets the value from the app.component.html (parent component) to the counts
@Input() counts !:number;
}
