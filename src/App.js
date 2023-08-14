import { useState } from 'react';
import { LanguageContext } from './context/LanguageContext';
import { ThemeContext } from './context/ThemeContext';

import './App.css';
import { Navbar } from './Components/navbar/Navbar';
import { Home } from './Components/home/Home';
import { Footer } from './Components/footer/Footer';
import { About } from './Components/about/About';
import { Contact } from './Components/contact/Contact';
import { Projects } from './Components/projects/Projects';
import { Skills } from './Components/Skills/Skills';

function App() {

  const [english, setEnglish] = useState(true)
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <LanguageContext.Provider value={{
        setEnglish,
        english
      }}>

        <div className="App">
          <Navbar />
          <Home />
          <main>
            <About />
            <Projects />
            <Skills />
          </main>
          <Contact />
          <Footer />
        </div>

      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
