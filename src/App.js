import React, {Component} from 'react';
import {Router, Route, browserHistory, Redirect} from "react-router";
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Share from   './Components/Share';
import AllPost from './Components/AllPost';
import { UserProvider } from './Components/Context';
import Cardview from './Components/CardView';
import Publicshare from './Components/PublicShare';
import ShareScreen from './Components/ShareScreen';

class App extends Component{
  render(){
    return(
      <div>
        <UserProvider>
      <Router history={browserHistory}>   
            <Redirect from="/" to="/PublicView" />
            <Route> 
        <Route exact path="/" component={AllPost}/>
        <Route exact path="/PublicView" component={AllPost} />
        <Route exact path="/Login" component={Login} />
        <Route exact path={"/Home/:email/:name"} component={Home} />
        <Route exact path={"/Share/:shareId"} component={ShareScreen} />
        <Route exact path={"/Tarento/Inspire/:shareId"} component={Publicshare} />
        {/* <Route exact path={"/Tarento/Inspire/:shareId"} component={Cardview} /> */}
        
        </Route>
      </Router>
      </UserProvider>
      </div>
    
    
    );
  }
}

export default App;
