import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test  from './ReactElement-1.jsx'

// const reactObject = {
//   <a href="http://google.com">Click to vist google</a>
// }

// this is also accepted by react
const element = (
  <a href='http://google.com'>Click here to visit google</a>
)

// This is how we defined the syntax for our custom react but this will not be accepted by the react because 
// react has not defined the parsing like this 
const reactElement = {
  type: 'a',
  props:{
      href : 'http://google.com',
      target : '_blank'
  },
  children: "Click me to visit Google"
}

// This how react do magic with the jsx the syntax which react accepts 
const reactParsing =React.createElement(
  "a",
  {
    href: "http://google.com",
    target:"_blank"
  },
  "Click me to visit google"
);

ReactDOM.createRoot(document.getElementById('root')).render(
// element
reactParsing
/* <App/> */
)
