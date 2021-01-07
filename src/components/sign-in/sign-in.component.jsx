import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor (){
        super();
        this.state = {
            email:'',
            password:''
        }

    }
        handleChange =(event) => {
           const {value,name} = event.target;
           this.setState({[name] : value});

        }
        handleSubmit = (event) => {
            event.preventDefault();

            this.setState({email:'' , password:''});


        }
    render(){
        return(
            <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password.</span> 
            <form  onSubmit={this.handleSubmit}>
            <FormInput  name='email' 
                    type='email'
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label="email"
                    required />
            <FormInput  name='password'
                    type='password' 
                    value={this.state.password} 
                    label="password"  
                    handleChange={this.handleChange}
                    required/>
         <div className='button'>
         <CustomButton  type='submit' >Sign In
         </CustomButton>
         <CustomButton  onClick={signInWithGoogle}  isGoogleSignIn > 
         Sign In With google
          </CustomButton>
          </div>
           

            </form>           
            </div>
        )
    }

}

export default SignIn;