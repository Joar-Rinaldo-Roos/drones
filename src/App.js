import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';
import Signup from './components/Signin/SignUp';
import ForgotPassword from './components/Signin/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';
import UpdateProfile from './components/Signin/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';
import Shopping from './pages/Shopping';


function App() {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/forgotpassword' component={ForgotPassword} exact />
          <PrivateRoute path='/updatepassword' component={UpdateProfile} exact />
          <PrivateRoute path='/shopping' component={Shopping} exact />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
