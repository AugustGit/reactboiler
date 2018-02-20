// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';





ReactDOM.render(<App />, document.getElementById('react-root'),
 console.log("Rendering <App/>"), console.log("Rendering <Navbar/> ",
 console.log("Rendering <Message/> "), console.log("Rendering <MessageList/> "),
 console.log("Rendering <Chatbar/> ")));



