import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';
import Signup from './components/Signin/SignUp';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
          <Route path='/signup' component={Signup} exact />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;