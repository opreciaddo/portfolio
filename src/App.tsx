// Styles
import './App.scss';
// Components
import HeaderBkg from './shared/HeaderBkg/HeaderBkg.component';
import FooterBkg from './shared/FooterBkg/FooterBkg.component';
import Navbar from './shared/Navbar/Navbar.component';
import Sections from './components/Sections/Sections.component';
import Footer from './shared/Footer/Footer.component';


function App() {
  return (
    <div className="App">
      <HeaderBkg />
      <div className="main-content">
        <Navbar />
        <Sections />
      </div>
      <FooterBkg />
      <Footer />
    </div>
  );
}

export default App;
