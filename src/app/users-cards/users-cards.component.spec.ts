import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersCardsComponent} from './users-cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {UserCardComponent} from "../user-card/user-card.component";

describe('UsersCardsComponent', () => {
    let component: UsersCardsComponent;
    let fixture: ComponentFixture<UsersCardsComponent>;

    let cardsModel = [
        {
            "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/glamorous-chat.appspot.com/o/avatars%2FmX3kTR3tq5YFZmlZ5Rz4lUlKR6J2.jpg?alt=media&token=06ed5fef-dc41-47cb-a1ec-c12f9cf5ddd8",
            "date": "2018-05-15T14:08:02.931Z",
            "fullName": "Mihaela Rouanda",
            "hasOverlay": true,
            "gender": "female",
            "key": "mX3kTR3tq5YFZmlZ5Rz4lUlKR6J2",
            "likes": 1,
            "online": "online",
            "provider": "facebook.com",
            "score": 5,
            "streams": 7,
            "timestamp": 1526393282931,
            "title": "Mihali Rouanda",
            "uid": "1050253861815931",
            "views": 1
        },
        {
            "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/glamorous-chat.appspot.com/o/avatars%2F2xR56i9gbJRhCskfgtrSuMMpHLr1.jpg?alt=media&token=b4ac3fcd-11a5-4782-83a0-f7a720719bca",
            "date": "2018-05-12T20:39:50.468Z",
            "description": " (en)",
            "country": "es",
            "fullName": "Gürjant Singh Gìłł",
            "hasOverlay": true,
            "key": "2xR56i9gbJRhCskfgtrSuMMpHLr1",
            "likes": 1,
            "online": "online",
            "provider": "facebook.com",
            "score": 5,
            "sessionId": "2_MX40NTk1MTY4Mn5-MTUyNjE1NzUwNzAxOX5xSjRXdk9zaW01dzVqdWdQWmZCYmVOYXN-fg",
            "streams": 2,
            "timestamp": 1526157590468,
            "title": "Gürjant Singh Gìłł",
            "uid": "1712371652188737",
            "views": 2
        },
        {
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
        },
        {
            "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/glamorous-chat.appspot.com/o/avatars%2FmVSyIRfHW7Xah1IDq03Ab0piTai1.jpg?alt=media&token=b7d73bbc-de40-4584-b763-ddbcd8cb4fde",
            "date": "2018-05-15T14:40:33.528Z",
            "country": "al",
            "description": " (en)",
            "fullName": "Artush Asatryan",
            "hasOverlay": true,
            "key": "mVSyIRfHW7Xah1IDq03Ab0piTai1",
            "likes": 1,
            "online": "online",
            "provider": "facebook.com",
            "score": 5,
            "sessionId": "1_MX40NTk1MTY4Mn5-MTUyNjM5NTU4MzUxM35ZRVhwSlZUVGVlOWJMcVA0anoraVR6eHR-fg",
            "streams": 6,
            "timestamp": 1526395233528,
            "title": "Artush Asatryan",
            "uid": "1928528130554160",
            "views": 3
        },
        {
            "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/glamorous-chat.appspot.com/o/avatars%2FoAhndL49zyPZvVpuUxaf3ck8Nr82.jpg?alt=media&token=3232720d-ca61-4a67-a61e-6d0d32218114",
            "date": "2018-05-12T08:31:52.822Z",
            "description": " (en)",
            "country": "us",
            "fullName": "Kuhal Soni",
            "hasOverlay": true,
            "key": "oAhndL49zyPZvVpuUxaf3ck8Nr82",
            "likes": 4,
            "online": "offline",
            "provider": "facebook.com",
            "score": 5,
            "sessionId": "2_MX40NTk1MTY4Mn5-MTUyNjExNDMwNTY3Mn4vM2d2dHJaZlYrdlg1bjI2dGZoTjFHUHV-fg",
            "streams": 5,
            "timestamp": 1526113912822,
            "title": "Kuhal Soni",
            "uid": "209873663130284",
            "views": 3
        }
    ]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersCardsComponent, UserCardComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersCardsComponent);
        component = fixture.componentInstance;
        component.cards = cardsModel
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show content', () => {
        const cardsElement: HTMLElement = fixture.nativeElement;
        expect(cardsElement.textContent).toContain('Mihali Rouanda');
    });
});
