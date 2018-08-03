import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  

  constructor() { }

  ngOnInit() {

      var vid = document.getElementById("video");
      vid.autoplay = true;
      vid.load();
    
  }

}
