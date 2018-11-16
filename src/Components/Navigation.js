import React from 'react';
import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import OpenSearch from './OpenSearch';

// Navigation component allows users to click through to specific pre-determined searches.
// On the home page, it also displays a button to open up the search.
const Navigation = props => {
  return(
    <ul className="main-nav">
      <li><NavLink to={`/cats`}>Cats</NavLink></li>
      <li><NavLink to={`/dogs`}>Dogs</NavLink></li>
      <li><NavLink to={`/castle`}>Castle</NavLink></li>
      <Switch>
        <Route exact path={'/search/'} component={null} />
        <Route path={'/'} component={OpenSearch} />
      </Switch>
    </ul>
  );
}

export default Navigation;
