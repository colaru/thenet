import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserCardComponent} from './user-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('UserCardComponent', () => {
    let component: UserCardComponent;
    let fixture: ComponentFixture<UserCardComponent>;
    let cardModel  = {
        "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/glamorous-chat.appspot.com/o/avatars%2FXiOP7zrZotgBP9fGHK0EIzleQp43.jpg?alt=media&token=c891c238-ed8f-4ade-8f4a-226f525801b5",
        "date": "2018-05-13T22:28:18.346Z",
        "country": "cz",
        "fullName": "Elise Delpech",
        "hasOverlay": true,
        "gender": "female",
        "key": "XiOP7zrZotgBP9fGHK0EIzleQp43",
        "likes": 1,
        "online": "offline",
        "provider": "twitter.com",
        "score": 5,
        "streams": 1,
        "timestamp": 1526250498346,
        "title": "Elise Delpech",
        "uid": "436669893453602",
        "views": 3
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserCardComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCardComponent);
        component = fixture.componentInstance;
        component.card = cardModel
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show content', () => {
        const cardElement: HTMLElement = fixture.nativeElement;
        expect(cardElement.textContent).toContain('Elise Delpech');
    });
});
