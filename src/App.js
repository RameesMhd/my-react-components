import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Global Styles/GlobalStyles.scss';
import MyNavbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
