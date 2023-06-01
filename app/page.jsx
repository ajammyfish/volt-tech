import {React} from 'react'
import Card  from './components/Card'
import Footer from './components/Footer'

import Teamwork from './imgs/tw.png'
import Automate from './imgs/auto.png'
import Engage from './imgs/eng.png'

const HomePage = () => {
  return (
    <div>
      <div className="home-container home-top">
        <h1 className='about'>Web Development and Bespoke Software Solutions for Business'</h1>
        <p className='intro'>We work with you to craft websites and bespoke software solutions to meet your business needs.</p>
      </div>

      <div className="home-container home-mission">
        <div className="mission">
          <h1>Our Team Will:</h1>
          <ul className='missionpoints'>
            <li>Craft fast, interactive, modern websites</li>
            <li>Automate Complex Business Processes</li>
            <li>Create powerful Business Intelligence reporting solutions</li>
            <li>Create bespoke software tailored to your needs</li>
          </ul>
        </div>
      </div>

      <div className="cards">
        <Card className='card' title="Collaborate" description="We'll work together to create the perfect solution." img={Teamwork} />
        <Card className='card' title="Automate" description="Provide software solutions to make your life easier." img={Automate} />
        <Card className='card' title="Engage" description="Drive engagement towards your business." img={Engage} />
      </div>

      <Footer />
    
    </div>
  )
}

export default HomePage