import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Authcontext from './components/Authcontext/Auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const logintrue = localStorage.getItem('isloggein')
    if (logintrue === "1") {
      setIsLoggedIn(true);
    }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isloggein', "1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isloggein','0')
    setIsLoggedIn(false);
  };

  return (
      <Authcontext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler}}> 
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </Authcontext.Provider>
  );
}

export default App;
