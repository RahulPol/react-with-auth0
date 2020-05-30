In React state is one of the core concept. It can be updated in the component it is intialized.

But consider you want to update the state and consume it in other components. For eg. if we want to implement authentication we want all components in the app to be aware of it. One of the way to do this is using props, but props are one way data binding so it would be easy to pass the auth data to child component but if users logs out or session timed out then it would be difficult to pass data to parent component.

Thus we are require a mechanism to persist the state at global level which can be acceesed to any component. For this we require a state management library like Redux, Recoil, etc.

Redux is a state management library. It is a standalone libarary and not affiliated to React. It can be used with other front end framework like angular and veu. It is easy to manage state with Redux using few constraints.

The three principles of Redux

1. There is only one source of truth.
   This means your entire application state is stored in single object. This makes state change more predictable and allows for easier debugging. However, it doesn't mean your entire redux code is bunched up in single file.
2. State is read-only.
   This means we can't directly mutate the state. None the less we wil definitely update the state otherwise redux will be pointless. But similar to react (using setState), the state is updated in special way(using actions).
3. Changes are made with pure functions
   This is essentially saying that final state produced has to be from simple non async function. State is outputed in redux through reducers which are pure functions. There is nothing fancy in reducers, they are setup as case switch statement. Each case takes copy of state and outputs a new state. Hence, the previous state is not mutated and case statement cant be async or do anything else. All the asynchronous complexity has to be handled in actions.

As mentioned previously Redux is a standalone library and can be used with other frameworks. In order to use it with react we use another library called React-Redux. Understand that React, Redux and React-Redux are three different libraries, each have their own docs and website. The react-redux libarary has only one function, named connect and it can't be used in isolation like React & Redux. The only purpose of react-redux is to hook up react with redux. This react-redux libarary is core of state management in react with Redux. And we use only react-redux to code and build the app state.
Following is a table that shows how these three libraries update and read state.

React
Update State: this.setState()  
Read State: this.state.state_property

Redux
Update State: Dispatch Action to the reducers using store.dispatch()
Read State: store.getState()

React-Redux
Update State: mapDispatchToProps() -> this.props.dispatch_action() -> dispatch action to the reducer
Read State: mapStateToProps() -> this.props.state_property

Lets understand bit of redux,
Redux has two main parts,

1. Actions
2. Reducers

1) Actions

   - Actions are redux specific.
   - Actions are javascript objects that must have one 'type' property as a string, which describes how the action will update the state.
   - Actions are passed into Redux with dispatch_action() function, which under the hood help pass action to reducers
   - Actions can optionally hold any other property as well for passing the data, which is usually called as payload. The data is passed as argument to an Action Creators.
     Action Creators -> These are just functions that returs actions and they are not separate building blocks of redux but instead just an alternate way to dispatch actions. They are used if you don't know the data you want to pass into the reducers beforehand ie it allows dynamically setting the payload property. And they are also used for async actions.

2) Reducers
   When an action is dispatched, its run through the reducers to see if there's a matching case and then reducer modifies the global state accordingly. For eg. if there is a login action it will run through the all reducers, if there is more than one, until a case statement in one of the reducers matches the action type. It might be a auth reducer which has matching case and it contains code(mostly a spread operator) that will make copy of current state and then just change one property to new value. After the reducers run is complete, a new state is outputed, this is now the state and can be accessed in any component. In react if the redux state changes the component is re-rendered automatically, thanks to react-redux library. The state stays the same way until another action is dispatched then the state is updated and the cycle repeats.
   - Reducers are redux specific.
   - Directly change the redux state.
   - Must be a pure function.
   - Takes "state" & "action" as parameter.
   - Usually setup as switch statement
   - Each case statement must match action type. ie there must be one to one relation between action and reducer case statement.

Ok, after all the theory lets get started and build a very simple app with React & Redux. For simplicity I have removed most of the default create-react-app files.

Lets start with only two plane actions and one simple reducer.

1. Create new directory ./src/store and within that create two new directories ./src/store/actions, ./src/store/reducers
2. Create two new files in actions,
   -actions.js
   -action_types.js
3. Add two action types in action_types
4. Import action types into actions export two actions. This steps seems redundant but using separate action types file is a best practice and recommended approach. Becuase consider if you just set the action's type property of string in action file and if you want to update it tomorrow, then you need to go through all the reducers that uses that action and update it. Thus instead create a golden copy of action types and you can use them everywhere and modify it at single place.
5. Now lets create reducer, ./src/store/reducers/reducer1.js. The reducer will list all the action types in switch case and return new state.
6. At this point we have set up the actions and the reducer. Now lets integrate our react app with the redux store. This must be done at ./src/index.js file so that the redux store is available globally. - Include all dependencies,
   npm i redux
   npm i react-redux
   - Create redux store using createStore function of redux and pass it reducer1 function. - Update index component by enclosing your <App> within <Provider> tag. - By wrapping your App in the Provider component we make sure that redux store is available globally for every component.
     After this our Redux setup is done
7. Now lets setup the react's redux container, which means hook up the react component to redux using mapstatetoprops and mapdispatchtoprops function.

   - create a simple component in your app at ./src/containers/component1. Notice the naming convention, in react class components are called containers and functional components are called functional components. We don't need to hook up functional component to redux as they are stand alone components and not aware of the redux state[write more about it.]
   - import dependencies ie both actions
   - set up three buttons for
     getState -> To retrieve current redux state
     dispatch action 1 -> To dispatch action 1
     dispatch action 2 -> To dispatch action 2
   - at the bottom we will set up two functions, these two functions and their parameters are reserved words so we can rename them or interchange them.
     mapStateToProps(state)
   - Essentially, how to get state from redux.
   - Returns the state and maps it to the props.
   - To use the state in render method of react component use this.props.[property_in_redux_state]
     mapDispatchToProps(dispatch)
   - This is similar to setState method of react, differnce is setState is usefull only for the component it is used. While this function modifies the state globally. It is quite common to use setState and this function in complex react app.
   - Similar to mapStateToProps it returns key value pair the name of keys are upto us, the values are the arrow functions that calls the dispatch method with an action, which will eventually pass value of action as argument to reducers
   - To use action in the render method we use this.props.[action_name]
   - The actions are dispatched automatically in async way and run through the reducer. In order to maintain the order of actions dispatched use batch, refer StitchX.
   - The reducer then update the value of the state and the component is re rendered automatically.  
     we attach these function to component using connect function of redux
   - Lets finish up our mapStateToProps(state) & mapDispatchToProps(dispatch) functions.
   - Test your application

     ----------------------------------------commit to git---------------------------------------------

8. Add action creators for action. These are nothing but simple functions that returns action object. It will usefull when you need to pass payload as well from your action to reducer. Check out the file ./src/store/actions/action.js
9. Add the action creators to mapDispatchToProps and call them using two new buttons.
10. Since we are equiped with action creator, lets pass data to reducers

- Create another action type as USER_INPUT in ./src/store/actions_types.js
- Create an action creator user_input() in ./src/store/actions.js. This will not be same as other action creators as it will have payload as well.
- Update the reducer to handle new action. In here, we need to update the intialState to incorporate our payload by adding new variable user_text to state.
- Update the ./src/containers/Container1.js and include new method to dispatch user_input() action, to simulate user input add Quote library and use getRandomQuote() method.
- Map the new state variable user_text in mapStateToProps
- Add a button(Dispatch user input) to trigger user_input() action
- Add a div that will show user_text prop.
  If you click on the Dispatch user input button now, the user_input action will be dispatched with payload which contains user input. At the reducer side the state will be updated and the new variable user_text in the state will contain the user input. After which your component will be automatically re rendered and in the mapstatetoprop function the dispatched user input will be assigned to prop which then showed on the UI.
  -------------------------------------------------commit to git---------------------------------------------

  We have completed the flow of adding redux state to your APP, then using the actions to update the state using reducers. This is done through single reducer, however in complex application you have various reducers for various purposes. For eg. You will have Auth reducer that will contain state representing user name, user's logged in status, etc and other reducer like Preference reducer that contain state representing logged in user's preference like his preffered font style, background color etc. So in react you don't create separate reducer per component rather create a reducer per state functionality. And then you combine these reducers to have single state.
  To illustrate this we will create a rootReducer which is combination of reducer1 which contains single state property ie stateProp1 & user_reducer which contains user_text.

11. Add Root reducer

- Segregate the reducer1 into two reducers ie ./src/store/reducers/reducer1 & ./src/store/reducers/user_reducer
- Create another reducer in ./src/store/reducers/index.js, the name index.js is intentional cause we don't need to specify it in import statement.
- Use redux's combineReducer function to combine these reducers and export the root reducer. This root reducer now contains all your apps reducers and combine state of it.
- Update ./src/index.js to include the root reducer instead of reducer1, notice the import statement, and create the store using rootReducer. Now your app has a root reducer which is combination of several other reducers and contains single state.
- Last step is to update your container1 component. Since we are using combined reducer the mapstatetoprops should use specific reducer to map state to your props.

This completes the redux setup in your react app.
-----------------------------------------------commit to git------------------------------------------------
