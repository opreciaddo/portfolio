// Styles
import './App.scss';
// Components
import HeaderBkg from './components/HeaderBkg/HeaderBkg.component';
import FooterBkg from './components/FooterBkg/FooterBkg.component';
import Navbar from './components/Navbar/Navbar.component';
import Sections from './components/Sections/Sections.component';


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
