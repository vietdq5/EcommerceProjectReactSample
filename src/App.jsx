import './App.css';
import AppRoutingPage from './AppRoutingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <AppRoutingPage />
      </main>
    </div>
  );
}

export default App;