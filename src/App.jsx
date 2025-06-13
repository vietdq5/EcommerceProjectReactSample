import './App.css';
import AppRoutingPage from './AppRoutingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useState, useEffect } from 'react';
import { getUser } from "./services/userServices";

const App = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const jwtUser = getUser();
    if (jwtUser && Date.now() >= jwtUser.exp * 1000) {
      localStorage.removeItem("token");
      location.reload();
    } else {
      setUser(jwtUser);
    }
  }, []);
  return (
    <div className='app'>
      <Navbar user={user} />
      <main>
        <AppRoutingPage />
      </main>
    </div>
  );
}

export default App;