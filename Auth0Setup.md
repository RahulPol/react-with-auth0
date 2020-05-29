Step 1: Create an Auth0 account. You can do this by registering yourself on https://auth0.com.
Step 2: After loging in to Auth0. Go to application tab and click on Create Application
Setp 3: Enter name of your app, Click on Single Page App and finally click Create
Step 4: After that you will be redirected to manage your app. Click on Settings tab. There you will find all important info about your app. Out of which you'll require Domain & Client ID. Remember Client ID is public key and Client secret is your private key. So, if you expose Client ID to world it's ok.
Step 5: In Allowed Callback URLs enter [app_url/callback] for your local development this value will be http://localhost:3000/callback, because react app are hosted in port 3000.
Step 6: In Allowed Web Origins enter [app_url]. This is actually comma seperated list of allowed origin for your app, but for now lets keep it to just our app. Again for local development it is http://localhost:3000
Step 6: Click on save changes at the bottom of the page.
Step 7: You'll need following package dependency,
npm i
