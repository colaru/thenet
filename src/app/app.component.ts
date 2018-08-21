import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import * as firebase from "firebase";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

        });

        this.initFirebase();
    }

    private initFirebase() {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCoVOTEVVI3z5ydNwV-nrB4piP_nw_1Tr8",
            authDomain: "thenet-app.firebaseapp.com",
            databaseURL: "https://thenet-app.firebaseio.com",
            projectId: "thenet-app",
            storageBucket: "thenet-app.appspot.com",
            messagingSenderId: "516439358048"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        let initApp = function () {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    console.log("User is signed in")
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var uid = user.uid;
                    var phoneNumber = user.phoneNumber;
                    var providerData = user.providerData;
                    user.getIdToken().then(function (accessToken) {
                        document.getElementById('sign-in-status').textContent = 'Signed in';
                        document.getElementById('sign-in').textContent = 'Sign out';
                        document.getElementById('account-details').textContent = JSON.stringify({
                            displayName: displayName,
                            email: email,
                            emailVerified: emailVerified,
                            phoneNumber: phoneNumber,
                            photoURL: photoURL,
                            uid: uid,
                            accessToken: accessToken,
                            providerData: providerData
                        }, null, '  ');
                    });
                } else {
                    // User is signed out.
                    console.log("User is signed out")
                    document.getElementById('sign-in-status').textContent = 'Signed out';
                    document.getElementById('sign-in').textContent = 'Sign in';
                    document.getElementById('account-details').textContent = 'null';
                }
            }, function (error) {
                console.log(error);
            });
        };

        window.addEventListener('load', function () {
            initApp()
        });
    }
}
