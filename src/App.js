import './App.css';
// frameworks
// import { useState } from 'react';
// Components
import NavBar from './NavBar/NavBar.jsx';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import AppsPage from './Pages/AppsPage/AppsPage';
import SkillsPage from './Pages/SkillsPage/SkillsPage.jsx';
import ContactPage from './Pages/ContactPage/ContactPage';
import Footer from './Footer/Footer.jsx';
// Data
import { Data } from './Data';


function App() {
  window.onload = function() {
    const navBar = document.querySelector('.NavBar-main')
    const navBarHeight = navBar.offsetHeight
    const contentViews = document.querySelectorAll('.content')
    contentViews.forEach(function(view, c) {
      view.style.marginTop = navBarHeight+"px"
      console.log("test")
    })
  }

  return (
    <div className="App">
      <NavBar />
      <HomePage data={Data.home}/>
      <AboutPage data={Data.about}/>
      <AppsPage data={Data.apps}/>
      <SkillsPage data={Data.skills}/>
      <ContactPage data={Data.contact}/>
      <Footer />
    </div>
  );
}

export default App;
