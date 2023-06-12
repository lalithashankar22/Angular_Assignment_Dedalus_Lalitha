import { Component, Input } from '@angular/core';
import { aboutTheme } from '../model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stopic:string | undefined 
  sparagraph:string | undefined
@Input() aboutInfo!:aboutTheme
}
