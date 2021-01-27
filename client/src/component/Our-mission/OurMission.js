import React from "react"
import "./OurMission.css"

function OurMission() {
  return (
    <div className="section-style our-mission">
      <div className="content-box-container">
        <div className="mission-box-img just-mission"></div>
        <div className="content-box our-mission-content-box">
          <h2>Our <br/> Mission</h2>
          <div className="sub-title">Support our kids in haiti.</div>
          <p>
          Apart from providing academic, vocational and moral instruction, MHI believes it is important to develop the character of its youth and young adults in preparation for the challenges life invariably poses to us all. We want to be involved in a variety of areas that teaches about life: Education, health/Wellness, sports, environmental, helping the poor, etc
          </p>
        </div>
      </div>
      <div className="circles circles-for-mision">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}

export default OurMission
