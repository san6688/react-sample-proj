This Sample To-Do Task React project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
React demo app which covers basic functionality of React js along with react router and redux for state management.

### *Basic React*
* Routing using BrowserRouter
* Class Components
* Functional Components
* native State change in component (commented and kept for reference)
* Conditional Rendering

### *UI components*
react *material-ui/core* library is used for UX Design

### *Redux State Mangement*
**Redux Store** - Centeralized Store which holds the state of our application (ie. all independent React Component state).
Whole application state is stored as an Object tree with in single store.

```
import { createStore } from 'redux'

export default const appStore = createStore(....reducers);
```
**Action** - Intent which describes the changes in the state of application. Action is plain Javascript Object which should have one mandatory property *type*

```
{
  type: 'UNIQUE_ACTION_NAME',
  ...
}
```

**Reducer** - Do the actual state transformation based on the dispatched Action/Intent. Reducer usually connects the store and action which is plain function with 2 default parameters *(state, action)* and should return *new state*.

```
const sampleReducer = (state,action) => {
  switch(action.type):{
    case 'UNIQUE_ACTION_NAME':
      ...
      return newState;
    default:
      return state;
  }
}
```

##### react-redux
Package which is used to connect React js application with native Redux library.

## Packages Used
* material-ui
* react-router
* redux
* react-redux
* immutable Js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

