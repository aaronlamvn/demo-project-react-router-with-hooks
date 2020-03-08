import React from 'react';
import './App.css';
import TopMenu from './components/TopMenu'
import Products from './pages/Products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { CartProvider } from './contexts/Cart'

function Home() {
  return <h2>Home</h2>;
}


function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <TopMenu />
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
