import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieList from './pages/MovieList'
import CharacterList from './pages/CharacterList';
import Home from './pages/Home'
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/character/:id">
              <CharacterDetail/>
          </Route>
          <Route path="/characterlist">
              <CharacterList/>
          </Route>
          <Route path="/movielist">
              <MovieList/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
