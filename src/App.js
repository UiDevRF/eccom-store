import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signIn-signUp/signIn-signUp-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
 
  unsubscribeFromAuth = null ;

  
  componentDidMount(){

    const { setCurrentUser } = this.props ; 

   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async (userAuth) => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapshot => {
         setCurrentUser({
             id: snapshot.id,
             ...snapshot.data()
           });
         });
         //console.log(snapshot.data());

     }
     else{
       setCurrentUser(userAuth);
     }
    


    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log("i am unsubscribing");
  }

   render(){
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
}
  
const mapDispatchToProps = dispatch => ({

  setCurrentUser : user => dispatch(setCurrentUser(user))

});

export default connect(null,mapDispatchToProps)(App);
