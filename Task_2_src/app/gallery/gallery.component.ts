import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
title:string ='Gallery Image'
code:string =""
img:string[]=['rgb(108, 205, 205)',' rgb(176, 184, 19)',' rgb(18, 224, 42)','rgb(160, 15, 73)']
/*for(x of img)
{
this.code += "<div class='div"+x+"'><h1>{{title}} </h1> </div>"
}*/
}


