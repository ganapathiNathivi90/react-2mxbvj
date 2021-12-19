import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resource from './Resource';
import resourceDetails from './resourceDetails';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resource" component={Resource} />
      <Route path="/resource/:id" component={resourceDetails} />
    </Switch>
  </main>
);

export default Main;
