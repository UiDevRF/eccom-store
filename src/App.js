import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signIn-signUp/signIn-signUp-page.component';

function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/signin' component={SignInSignUpPage}/>
    <Route path='/shop' component={ShopPage} />
    
  </Switch>
    </div>
  );
}

export default App;
