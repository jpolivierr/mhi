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
          titleContent="Many Hands International builds character and encourages personal growth of youth in underserved communities in order to create future community stewards."
        />
        <div className="what-we-do-showcase">
          <div className="box showcase-1">
            <div className="box-content showcase-content">
              <div className="showcase-mini-text">lorem sumrini</div>
              <h3>Provide Education</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Nesciunt, accusantium!
              </p>
            </div>
          </div>
          <div className="box showcase-2">
            <div className="box-content showcase-content">
              <div className="showcase-mini-text">lorem sumrini</div>
              <h3>Provide Education</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Nesciunt, accusantium!
              </p>
            </div>
          </div>
          <div className="box showcase-3">
            <div className="box-content showcase-content">
              <div className="showcase-mini-text">lorem sumrini</div>
              <h3>Provide Education</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium!Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Nesciunt, accusantium!
              </p>
            </div>
          </div>
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

export default WhatWeDo
