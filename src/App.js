import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signIn-signUp/signIn-signUp-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currentUser : null
    }
  }

  unsubscribeFromAuth = null ;

  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async (userAuth) => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapshot => {
         this.setState({
           currentUser: {
             id: snapshot.id,
             ...snapshot.data()
           }
         },
         () => {
           console.group(this.state);
         });
         //console.log(snapshot.data());
       });

     }

     else{
       this.setState({currentUser:userAuth});
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
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/signin' component={SignInSignUpPage}/>
      <Route path='/shop' component={ShopPage} />
      
    </Switch>
      </div>
    );
   }
}
  


export default App;
