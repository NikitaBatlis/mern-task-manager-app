# MERN Task-Manager App

A Task Manager app that was created using Create-React-App, React-Bootstrap, Material UI, Axios and Router-DOM. Express server endpoints performing CRUD operations to a MongDB where user credentials and data is stored. Passport authentication with either local, Google or Facebook login is required to access the dashboard.

Deployed:
https://mern-task-manager-nikitabatlis.herokuapp.com/

#### NB NOTE: 
⋅⋅*  Please use either a Google or Local account to login on the Heroku deployment. Facebook login only works in development.
⋅⋅*  The Heroku app origin URL is hardcoded into this source code. Replace the `https://mern-task-manager-nikitabatlis.herokuapp.com/` with either `http://localhost:3000` to get the app working in development.
⋅⋅*  The reason I have hardcoded the origins this way was so I could get the Express server and Create-React-App client to work off the same heroku server.


### Prerequisite
#### SERVER:

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
http://localhost:3000/api/login/google/redirect
http://localhost:3001/api/login/google/redirect
```


## Deployment

To be able to run this file:
1. Copy it to your local machine.
2. Create keys.js and replace the values there with your MongoDB, Facebook and Google app credentials.
3. Replace the heroku-app URL in `routes/login.route.js` file with the `http://localhost:3000` like the comments tell you.
4. The follow CLI instructions below.

```
cd mern-task-manager-app
npm install
npm start

cd client
npm install
npm start

```