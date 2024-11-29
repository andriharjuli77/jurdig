import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { homeSection } from "../data/HomeSection"

import parse from 'html-react-parser'
import '../styles/Home.css'

function Home() {
  return (
    <>
        <Navbar />
            <div className="wrapper">
                <section id="home">
                <img src={homeSection.image}/>
                <div className="kolom">
                    {parse(homeSection.content)}
                </div>
                </section>
            </div>
        <Footer />
    </>
  )
}

export default Home