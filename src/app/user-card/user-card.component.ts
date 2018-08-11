import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() card = {}

  constructor() { }

  ngOnInit() {

  }

  hasOverlay(card: any): boolean {
      return card.hasOverlay !== false;
  }

}
