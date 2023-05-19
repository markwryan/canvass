import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {Route} from "react-router";

class App extends Component {
  render() {
    return(
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/all' exact={true} component={ContactList} />
            <Route path='/create' exact={true} component={ContactCreate} />
          </Switch>
        </Router>
    )
  }
}

export default App;