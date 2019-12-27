import React, { Component } from 'react';
import './App.css';
import Home   from './component/Home'
import About from './component/Aboutus'
import Contactus  from './component/Contactus'
import Signin   from './component/Sign'
import Login   from './component/Login'


class App extends Component{
  render(){
    return(
      <div>
     <Home></Home>
     <About></About>
     <Contactus></Contactus>
       <Login></Login>
       <Signin></Signin>
   
      </div>
  
    )
  }
}

export default App;
