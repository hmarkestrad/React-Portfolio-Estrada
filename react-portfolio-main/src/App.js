import React, {useState } from 'react';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  // const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
  const [currentTab, setCurrentTab] = useState('About');
  const renderPage = () => {
    switch(currentTab) {
      case 'About': return <About />;
      case 'Contact': return <Contact />;
      case 'Portfolio': return <Portfolio />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  }

  return (
    <div className="..">
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
      <div>{renderPage(currentTab)}</div>
      <main> 
      </main>
    <Footer />
    </div>
  );
}

export default App;
