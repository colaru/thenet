import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCardsComponent } from './users-cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('UsersCardsComponent', () => {
  let component: UsersCardsComponent;
  let fixture: ComponentFixture<UsersCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCardsComponent ], schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
