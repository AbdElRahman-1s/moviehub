import { useState } from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Typessection from '../components/Typessection'
import Mostviewed from '../components/Mostviewed'
import Moviecards from '../components/Moviecards'
import Footer from '../components/Footer'
import '../index.css';




function Homepage() {

  const [darkMode, setDarkMode] = useState(false);


  return (
     <div 
     className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        <Herosection
          darkMode={darkMode}
        />
        <Mostviewed
          darkMode={darkMode}
        />
        <Typessection
          darkMode={darkMode}
        />
        <Moviecards
          darkMode={darkMode}
        />
      </main>
      <Footer
        darkMode={darkMode}
      />
    </div>
  )
}

export default Homepage