import React from 'react';
import { Route, Switch } from 'react-router-dom';

import "./App.css";

// Component layout
import Layout from './components/layout';

// Pages
import Main from './pages/main';
import About from './pages/about';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
      </Switch>
    </Layout>
  )
}

export default App;
