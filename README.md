# MERN Task-Manager App

Deployed here:
https://mern-task-manager-nikitabatlis.herokuapp.com/

A Task Manager app that was created using Create-React-App, React-Bootstrap, Material UI, Axios and Router-DOM. Express server endpoints performing CRUD operations to a MongDB where user credentials and data is stored. Passport authentication with either local, Google or Facebook login is required to access the dashboard.

### Prerequisite
>#### SERVER:

Please make sure you have a folder called 'config' with a `keys.js` file with the following code with your own account variables:

```
module.exports ={
	google: {
		clientID: 'replace with your clientId: https://console.developers.google.com/',
		clientSecret: 'replace with your clientSecret: https://console.developers.google.com/'
    },
    facebook: {
        appID: 'replace with your appID: https://developers.facebook.com/',
        appSecret: 'replace with your appSecret: https://developers.facebook.com/'
    },
	mongoDB: {
		dbURI: 'replace with your MongoDB URI: https://cloud.mongodb.com/user#/atlas/login'
	},
	session: {
		cookieKey: 'cookieKeyExample'
	}
}
```
### Authorized JavaScript origins
```
http://localhost:3000
http://localhost:3001
```

### Authorized redirect URIs
```
http://localhost:3000
http://localhost:3001
```


## Deployment

To be able to run this file:
1. Copy it to your local machine
2. Create keys.js and replace the values there with your MongoDB, Facebook and Google app credentials.
3. The follow CLI instructions below.


```
cd mern-task-manager-app
npm install
npm start

cd client
npm install
npm start

```