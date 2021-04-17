## LocalReads

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
LocalReads is a web app that allows Metro Vancouver residents to find independent bookstores near them. Each business listing includes an image gallery, general information and user-contributed reviews.
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap (+ Bootstrap Icons)
* Google Maps API
* Google Fonts
* Firebase (Firestore, authentication, hosting)
* [Bookmanager API] (https://bookmanager.com/public/api/dev/)
	
## Content
Content of the project folder:

 Top level of project folder: 
├── .gitignore               # Git ignore file
├── 404.html                 # 404 page redirect
├── about.html               # About our app
├── account.html             # User profile info
├── addbusiness.html         # Add a business form
├── bizsearch.html           # Page for business entries from Firestore
├── businesses.html          # Business directory
├── favicon.ico              # Favicon for browser
├── index.html               # Landing HTML file, this is what users see when you come to url, shows map
├── login.html               # Login
├── main.html                # Shows Bookmanager API geolocator
└── README.md

It has the following subfolders and files:
├── .firebase                # Stores the hosting cache
├── bootstap-icons           # NPM module that provides icon files
├── scripts                  # Folder for scripts
    /addbiz.js               # 
    /bizsearch.js            # 
    /businesses.js           # 
    /firebase-api-bookstore.js # 
    /login.js                # 
    /map.js                  # 
    /user.js                 # 
├── styles                   # Folder for styles
    /bizsearch.css           # 
    /bootstap-color.css      # 
    /businesses.css          # 
    /main.css                # 

Firebase hosting files: 
├── .firebaserc
├── firebase.json
├── firebase.indexes.json
├── firestore.rules
├── package-lock.json
├── storage.rules
