import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {users_cards} from "./cards.model";
import * as firebase from 'firebase';

@Component({
    selector: 'cards',
    templateUrl: './cards.page.html',
    styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

    cards = users_cards // we init the cards here

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    logout() {
        firebase.auth().signOut()
            .then(function () {
                // Sign-out successful.
                console.log("logout")
            })
            .catch(function (error) {
                // An error happened
                console.log("error: " +  error)
            });

        this.router.navigateByUrl('/landing');
    }

    gotoProfilePage() {
        this.router.navigateByUrl('/profile');
    }

}
