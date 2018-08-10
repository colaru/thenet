# THENET App

## About the app

![THE NET app - landing page](https://cdn-images-1.medium.com/max/1600/1*ZgAPPRxY5K5O2iZY8GtOiQ.png)

We choose to implement one single accompanying application for our [Ionic 4 book](https://leanpub.com/ionic4). We prefer to show just one application because we want to develop it from zero to production — in the end, we will expose live our app on the Web as PWA, we will publish it in the mobile stores (Play Store and App Store), and will we package it for the desktop.

Demo: [https://thenet-app.firebaseapp.com](https://thenet-app.firebaseapp.com)

![THE NET app - cards page](https://cdn-images-1.medium.com/max/1600/1*llK50sHDoIhCvmKGS9ZDiA.png)

## Run the app locally (as a Web application)

### First, get the app

We have to install the Git client (containing also the Git CLI) on our machine in order to use GitHub. We have to [dowload](https://git-scm.com/downloads) it and install it.

Now, anyone can get the project on local using this command:

    git clone https://github.com/colaru/thenet.git

### Install Ionic 4

We have to install [Ionic 4 Beta CLI](https://beta.ionicframework.com/docs/installation/cli) on our machine, and for this, we need to install [NodeJS](https://nodejs.org/en) first. We have to download (LTS - Long Term Support version) from []nodejs.org](https://nodejs.org) and install it on our machine. After installation we can verify the Node version:

    node --version
    
We get:
    
    v8.11.3
    
Node is coming with a package manager named [Npm](https://www.npmjs.com/). We need it for dependencies management for JavaScript libraries and frameworks installed on our machine (similar to yum or apt package managers in Linux, or Maven and Gradle in Java). We can also check the Npm version: 

    npm version

We will get something similar with this:

    { npm: '5.6.0',
      ares: '1.10.1-DEV',
      cldr: '32.0',
      http_parser: '2.8.0',
      icu: '60.1',
      modules: '57',
      napi: '3',
      nghttp2: '1.32.0',
      node: '8.11.3',
      openssl: '1.0.2o',
      tz: '2017c',
      unicode: '10.0',
      uv: '1.19.1',
      v8: '6.2.414.54',
      zlib: '1.2.11' }

Next, we install *Ionic framework* using Npm package manager:

    npm install -g ionic
    
We can test now the Ionic framework version of our machine: 

    ionic info
    
We get:

    Ionic:
    
       ionic (Ionic CLI) : 4.0.1
    
    System:
    
       NodeJS : v8.11.3
       npm    : 5.6.0
       OS     : macOS High Sierra

Install GIT client on your machine

### Run the app

Run the app going in the app main folder and running:

    ionic serve

## Test on local mobile devices

We have to install the Android platform and iOS platform on our machine (we hope we have a Mac OS to be able to install both). This because we have to publish our application in stores, we need the binary for each platform *.apk* for Android *.ipa* for iOS.

### Android

For [Android](https://www.android.com/) platform, if we already have the Java JDK installed we have to install [Android Studio](https://developer.android.com/studio/install.html?pkg=studio) (we will be familiar with it if we are already using IntelliJ Idea) which is coming with:

* SDK Manager - will let us install the Android SDK (at a given level)
* ADV Manager - will allow us to configure the Android emulators
* Android Device Monitor- will let us see our devices logs

### iOs

For [iOs](https://www.apple.com/lae/ios/ios-11/) platform, We have to install the [XCode](https://developer.apple.com/xcode) first which is coming with the SDK, iOs and iPad emulators and all we need to test locally and deploy our app in production.



