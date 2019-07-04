import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route } from 'react-router-dom';
import './App.css';

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
