
import React from "react";
import InfinityScroll from "./components/InfinityScroll/InfinityScroll";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./components/InfinityScroll/Home";
import "./app.css"
function App() {
 return (
   <Router>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/infinity-scroll" component={InfinityScroll}/>
     </Switch>
   </Router>
 )
}

export default App;
