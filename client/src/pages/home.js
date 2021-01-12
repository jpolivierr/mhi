import Navigation from '../component/Navigation/Navigation'
import Showcase from '../component/Showcase/Showcase'
import OurMission from '../component/Our-mission/OurMission'
function Home() {
  return (
    <div className="home">
      <Navigation/>
      <Showcase/>
      <OurMission/>
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