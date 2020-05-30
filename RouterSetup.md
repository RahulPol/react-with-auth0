React app is single page appliction thus the routing is not as simple as traditional web app. In traditional web app you have mulitple HTML files and routing is done by request a new page from the server with every route change. The server then delivers the new HTML page and browser is reloaded for every page.

This is not the case with SPA. In here the routing is bit tricky. We dont serve a new page for every request instead you stay on the same page and a different UI is displayed without reloading the browser. This results in much faster performance.

In order accomplish SPA routing you can create a global state variable which controls the visibility of a component so that only one component is visible but then you would also require history of your routing else if we press back arrow we will be navigated outside of the app.

Thus we use react-router libaray. In this library each route is associated with component. This is a component that will be responsible for routing your app.

Lets install routing in our recact app.

1. Include the dependencies,
   npm i react-router
2. Add three new components in ./src/functional.
   ./src/functional/Component1.js
   ./src/functional/Component2.js
3. Create new file routes.js in ./src. This is where all your routes will be stored.
4. Update routes component file as follows,
   - Import all the functional components and the container1
   - Import Router & Route from react-router. The Router component is the parent component that will wrap all our declared routes. And the route component will hold the logic for associating each component with one route.
   - Create a Routes component
   - To create routes we need make a parent component(Router) and then declare each route within Router component of react-router lib.
   - The Route component within Router component takes two properties,
     path -> Route of the component
     component -> Name of the component
5. In ./src/router.js we have wired our routing logic however we haven't given links on the UI for the user. To do so, create another component called Header in ./src/container/Header.js. Notice I am creating Header as class component as we may need to get our header from root state depending on some logic like if user is not logged in then hader will contain only sign up and login links and if logged in then list of components that we have in our app.
6. Updated Header component as follows,
   - import Link component from react-router-dom to actually add links to our app. Install react-router-dom dependency.
     npm i --save react-router-dom
   - Add Link component, it takes one prop to="[routes_defined_in_the_routes_component]"
7. Next, import header to your .src/routes.js file. and place it within the Router component so the react-router can understand the routes.
   The flow of the router is due to Route component which is like an if else statement. If a certain route then a certain component. And placing header component without Route will display it no matter what is the route.
8. At the point all routes setup is done but we need to take care of history object so the broweser doesn't exit the app or reload the page instead just switches back to previous component. Setting up history is very simple in case of react app just include history library and setup createBrowserHistory object. Since this is not a component rather an utility I have created it in separate path ./src/utils/history.js
9. Include the history in .src/routes/route.js and add it as a prop to the router component.
10. Now are done with routing. Include the routes in ./src/App.js file and replace container with routes.

I am doing one more change that is making container as default(/) route, to do so modify header.js and update containers link to just "/". Same goes for routes.js and include exact keyword in container1 route tag.
---------------------------------------------------commit to git--------------------------------------------
