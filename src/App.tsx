// Styles
import './App.scss';
// Components
import HeaderBkg from './components/HeaderBkg/HeaderBkg';
import FooterBkg from './components/FooterBkg/FooterBkg';
import Navbar from './components/Navbar/Navbar';
import Sections from './components/Sections/Sections';

function App() {
  return (
    <div className="App">
      <HeaderBkg />
      <div className="main-content">
        <Navbar />
        <Sections />
      </div>
      <FooterBkg />
    </div>
  );
}

export default App;
