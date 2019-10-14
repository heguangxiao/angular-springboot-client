// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBGJEOHGdg4mAuKRXnUyTo0LkkSY4Yyzv4',
    authDomain: 'angular-alpha-client.firebaseapp.com',
    databaseURL: 'http://angular-alpha-client.firebaseio.com',
    projectId: 'angular-alpha-client',
    storageBucket: 'angular-alpha-client.appspot.com',
    messagingSenderId: '119689147504',
  },
  apiUrl: 'https://sheltered-brook-04677.herokuapp.com/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
