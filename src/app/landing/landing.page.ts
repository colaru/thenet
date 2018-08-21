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

        // FirebaseUI config.

        var uiConfig = {
            signInSuccessUrl: '/cards',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                {
                    // Google provider must be enabled in Firebase Console to support one-tap
                    // sign-up.
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    // Required to enable this provider in one-tap sign-up.
                    authMethod: 'https://accounts.google.com',
                    // Required to enable ID token credentials for this provider.
                    // This can be obtained from the Credentials page of the Google APIs
                    // console.
                    clientId: '516439358048-ubbr6sn59k7i7reiri5rq57tdcql1at3.apps.googleusercontent.com'
                },
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                // firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
            ],
            // Required to enable one-tap sign-up credential helper.
            credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
            // Terms of service url.
            tosUrl: 'https://thenet-app.firebaseapp.com',
            // Privacy policy url.
            privacyPolicyUrl: 'https://thenet-app.firebaseapp.com'
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());

        // Auto sign-in for returning users is enabled by default except when prompt is
        // not 'none' in the Google provider custom parameters. To manually disable:
        // ui.disableAutoSignIn();

        // The start method will wait until the DOM is loaded.
        // if (ui.isPendingRedirect()) {
            ui.start('#firebaseui-auth-container', uiConfig);
        // }

    }

    private configureVideoPlayer() {
        let vid: HTMLVideoElement = <HTMLVideoElement> document.getElementById("video");
        vid.load();
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
        // slides.startAutoplay()
    }
}
