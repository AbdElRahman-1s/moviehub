import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Typessection from '../components/Typessection'
import Mostviewed from '../components/Mostviewed'
import Moviecards from '../components/Moviecards'
import Footer from '../components/Footer'
import '../index.css';




function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Herosection />
        <Mostviewed />
        <Typessection />
        <Moviecards />
      </main>
      <Footer />
    </>
  )
}

export default Homepage