import React from 'react'
import Footer from '../components/Footer'
import jdpc from '../imgs/jdpc.png'
import jfwd from '../imgs/jfwd.png'
import ias from '../imgs/iasip.png'
import planner from '../imgs/planner.png'
import Image from 'next/image'

export const metadata = {
  title: 'About Volt Tech'
}

const AboutPage = () => {
  return (
    <div>
        <h1>Projects</h1>
        <h3>Some of our recent solutions for clients.</h3>
        <div className="projects">
          <div className="p-card">
            <a className="p-overlay" href="https://windowcleaningdorset.netlify.app/" target='_blank'>View Site</a>
            <Image className='projectimg' src={jdpc} alt="jd pro-clean" />
            </div>
          <div className="p-card">
            <a className="p-overlay" href="https://jamesfisherwebdev.netlify.app/" target='_blank'>View Site</a>
            <Image className='projectimg' src={jfwd} alt="jf web dev" />
          </div>
          <div className="p-card">
            <a className="p-overlay" href="https://jamesfisherwebdev.netlify.app/" target='_blank'>View Site</a>
            <Image className='projectimg' src={planner} alt='planner' />
          </div>
          <div className="p-card">
            <a className="p-overlay" href="https://ajammyfish.github.io/iasip/" target='_blank'>View Site</a>
            <Image className='projectimg' src={ias} alt='iasip' />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage