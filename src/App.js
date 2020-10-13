import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// tools
import { RenderIfTrue } from './tools'

// pages
import { Home, Loading } from './pages'

// css files
import './css/App.css';

function App() {
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    //setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div className="App">
      <RenderIfTrue render={loading}>
        <Loading />
      </RenderIfTrue>
      <RenderIfTrue render={!loading} >
        <Router>
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </RenderIfTrue>
    </div>
  );
}

export default App;
