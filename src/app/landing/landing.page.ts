import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  

  constructor() { }

  ngOnInit() {

      let vid: HTMLVideoElement  = <HTMLVideoElement> document.getElementById("video");
      vid.autoplay = true;
      vid.load();
    
  }

}
