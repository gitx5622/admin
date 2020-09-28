import React from 'react';
import Main from "./components/Main";
import {Router,Switch, Route} from 'react-router-dom'
import Register from "./containers/Register";
import {history} from "./history";
import Login from "./containers/Login";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path={["/"]}>
          <Main>
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </Main>
        </Route>
        <Route path={["/signup","/login"]}>
          <Route path='/signup' component={Register} />
          <Route path='/login' component={Login} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
