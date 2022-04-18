# bus-organisation-system-s
###BOSS

this project is use to build a system for bus company to manage everything

- sending email (perform mail merge function)
    - member choosing that bus route
    - member birthday

here is a tutorial about sending mail: https://www.w3schools.com/nodejs/nodejs_email.asp 

- view all/add/delete/edit member details
    -> all attribute can be seens in Server/models/member

- view all/add/delete/edit employee details
    -> bus license 

- view all/add/delete/edit vehicle details

---------
## To start 

1.install nodeJS in your local environment

### Backend:
cd Client
npm install
npm start

2. add a ".env" file under Server/
Register your account in https://www.mongodb.com/cloud
start a cluster, add the url in the ".env" file with "MONGO_URL = " in front of it
Replace <password> with your password

MONGO_URL = 

### Frontend:
cd Server
npm install
npm start

---------
Project achitecture is based on the tutorial: https://www.youtube.com/watch?v=tlTdbc5byAs&t=0s 
---------
### This project is belong to 
https://cmbus.org 
https://www.hkba.info 

