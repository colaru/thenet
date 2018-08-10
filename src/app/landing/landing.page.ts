import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'

@Component({
    selector: 'landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {


    constructor() {
    }

    ngOnInit() {
        this.configureVideoPlayer();
        this.configureSlider();

        this.initFirebaseUi();
    }

    private initFirebaseUi() {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCoVOTEVVI3z5ydNwV-nrB4piP_nw_1Tr8",
            authDomain: "thenet-app.firebaseapp.com",
            databaseURL: "https://thenet-app.firebaseio.com",
            projectId: "thenet-app",
            storageBucket: "thenet-app.appspot.com",
            messagingSenderId: "516439358048"
        };
        firebase.initializeApp(config);


        // FirebaseUI config.

        var uiConfig = {
            signInSuccessUrl: '/cards',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                // firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: 'https://thenet-app.firebaseapp.com',
            // Privacy policy url.
            privacyPolicyUrl: 'https://thenet-app.firebaseapp.com'
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    private configureVideoPlayer() {
        let vid: HTMLVideoElement = <HTMLVideoElement> document.getElementById("video");
        vid.autoplay = true;
        vid.load();
    }

    private configureSlider() {
        var slides = document.querySelector('ion-slides');
        slides.options = {
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar', // Can be "bullets", "fraction", "progressbar" or "custom"
            },
        }
        slides.pager = true;
        slides.startAutoplay()
    }
}
