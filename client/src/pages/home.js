
import {useEffect}from 'react'
import Showcase from '../component/Showcase/Showcase'
import OurMission from '../component/Our-mission/OurMission'
import ThePledge from '../component/The-pledge/ThePledge'
import WhatWeDo from '../component/What-we-do/WhatWeDo'
import Impact from '../component/Impact/Impact'
import JoinUs from '../component/Join-us/JoinUs'
import News from '../component/News/News'
function Home(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
  return (
    <div className="home">
  
      <Showcase  Donate = {()=>{props.donatez()}}/>
      <OurMission/>
      <ThePledge />
      <WhatWeDo/>
      <Impact Donate = {()=>{props.donatez()}} />
      <JoinUs/>
      <News/>
      {/* <Titlesection />
      <div className="main-button">SUPPORT US</div>
      <div className="circles">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div> */}
    </div>
  )
}

export default Home
