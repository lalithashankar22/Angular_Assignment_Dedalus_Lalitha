import { Component } from '@angular/core';
import { aboutTheme } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskTwo';
  msg:string='The app is available for desktop (Windows and macOS) and mobile (Android and iOS) devices. You must have a work or school account through your organization to sign in to the app';
  about:aboutTheme[]=[{topic:'About',paragraph:this.msg},
  {topic:'Company',paragraph:this.msg},
  {topic:'Service',paragraph:this.msg}
];
  
}
