import "./WhatWeDo.css"
import TitleSection from "../Title-section/titleSection"

function WhatWeDo() {
  return (
    <div className="section-style what-we-do">
      <div className="content-box-container what-we-do-box-container">
        <TitleSection
          transparentText="EXPLORE"
          miniText="contribution"
          title="What We Do"
          titleContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit harum doloribus odio, libero at atque commodi."
        />
        <div className="what-we-do-showcase">
          <div className="box showcase-1">
            <div className="box-content showcase-content">
              <div className="showcase-mini-text">lorem sumrini</div>
              <h3>Provide Education</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!
              </p>
            </div>
          </div>
          <div className="box showcase-2">
            <div className="box-content showcase-content">
              <div className="showcase-mini-text">lorem sumrini</div>
              <h3>Provide Education</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!
              </p>
            </div>
          </div>
          <div className="box showcase-3">
            <div className="box-content showcase-content">
              <div className="showcase-mini-text">lorem sumrini</div>
              <h3>Provide Education</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
