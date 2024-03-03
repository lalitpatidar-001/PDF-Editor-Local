## LIVE Link --> https://pdf-editor-ui.onrender.com/

## What is PDF Editor?
 PDF Editor is a web application to edit pdf's. 
 
 It is built on REACT.JS TAILWIND REDUX-TOOLKIT NODE.JS EXPRESS.JS MONGODB.


## Features?
 Login and Registration.
 
 Home page - user can upload new pdf, can delete saved pdf and It renders all users saved PDF.
 
 Preview - user can see preview of saved pdf and can edit

 Edit PDf - User can Extract pages from pdf and can generate new pdf from them

 Rearrange - User has an option to re-arrange pdf manually by selecting pdf. By default pages arranged by their sequence. 

 Save Generated Pdf - User can Save newly generated pdf.

 Download - User can also download the generated pdf.


## Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

### Installation Guide

```shell
git clone git@github.com:lalitpatidar-001/PDF-Editor-Local.git .
```

* Move to Root directory
```shell
cd PDF-Editor-Local
```

* Enoronment setup - create .env file in root of server folder and provide below variable values
```shell
PORT=5000
DB_URL =your-db-url
JWT_KEY = any-key
```
## Note ->
If you changed PORT or Domain other than 5000 and localhost , do not forget to update it in axios.js in client/src folder.

If you have not changed skip this note

* Server setup - make sure you are in root directory
```shell
cd server
npm install
npm start
```

* Open new terminal

* Client Setup - make sure you are in root directory
```shell
cd client
npm install
npm start
```
Done with setup 😊😊 Enjoy the application

## Screenshots
LOGIN
<img width="760" alt="Screenshot_20240303_114739" src="https://github.com/lalitpatidar-001/PDF-Editor-Local/assets/144806496/7ebe8a82-488d-4a24-bc5a-e72da17b09d9">
<img width="207" alt="Screenshot_20240303_123929" src="https://github.com/lalitpatidar-001/PDF-Editor-Local/assets/144806496/31633ef3-d458-4bd5-a6ce-0c59bbd47ec3">




 
