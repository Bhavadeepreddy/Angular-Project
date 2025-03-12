//  CMD TO RUN ANGULAR APPLICATION
ng serve

// CMD TO CREATE A NEW COMPONENT(NEW FILE)
ng generate component newComponent

// app.component.ts FILE WILL BE UPDATED AUTOMATICALLY WHEN WE CREATE A NEW COMPONENT

// THE ABOVE CREATED FILE SHOULD BE CALLED IN app.component.html IF NOT WE CANT RENDER ITS DATA IN UI
<app-new-component></app-new-component> // THIS IS AVAILABLE IN newComponent-component.ts FILE selector: 'app-new-component'

// CMD TO INSTALL BOOTSTRAP (IN ANGULAR WE NEED TO INSTALL BOOTSTRAP)
// JQUERY IS NOT REQUIRED FOR BOOTSTRAP5 BUT WE HAVE TO INSTALL JQUERY IF WE USE OLDER VERSION OF BOOTSTRAP
// TO GET A SPECIFIED VERSION OF BOOTSTRAP WE USE - $ npm i bootstrap@5.3.2
npm install bootstrap // THIS WILL INSTALL LATEST VERSION OF BOOTSTRAP

// AFTER BOOTSTRAP INSTALLATION package-lock.json & package.json FILES WILL UPADATE WITH BOOTSTRAP DEPENDENCIES

// WE HAVE TO EDIT THE angular.json FILE FOR ADDING OUR BOOTSTRAP PATH WHICH IS AVAILABLE IN node_modules FILE AFTER INSTALLING THE BOOTSTRAP, IN TWO PLACES WE HAVE TO COPY THE SPECIFIED PATH THEY ARE ACTUAL CODE & TEST CODE
"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
"node_modules/bootstrap/dist/css/bootstrap.min.css"
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
    ],
    "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]


// TO CREATE A PIPE
    ng generate pipe pipes/gigabytes-to-megabytes
// HERE WE ARE CREATING A gigabytes-to-megabytes PIPE UNDER pipes FOLDER

// TO CREATE A SERVICE
    ng generate service myService/myDate
// HERE WE ARE CREATING THE myDate SERVICE FILE UNDER myService FOLDER

// Since Angular 17+ doesn't generate app.module.ts, the traditional HttpClientModule isn't used. Instead, 
// we need to explicitly provide the HttpClient service using provideHttpClient() in bootstrapApplication().
// SO WE HAVE TO EDIT IN main.ts FILE BUT WE HAVE app.config.ts FILE SO I EDITED HERE