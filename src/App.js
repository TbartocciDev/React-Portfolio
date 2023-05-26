import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import AppsPage from './Pages/AppsPage/AppsPage';
import SkillsPage from './Pages/SkillsPage/SkillsPage.jsx';
import ContactPage from './Pages/ContactPage/ContactPage';
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutPage />
      <AppsPage />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
