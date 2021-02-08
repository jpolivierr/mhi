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
              {/* <div className="showcase-mini-text">lorem sumrini</div> */}
              <h3>Prepare our Youth</h3>
              <p>
              
                Enhance the readiness to learn of children in the Greater city
                of Au-Cap by providing them with school supplies that are
                essential to academic success.
              </p>
            </div>
          </div>
          <div className="box showcase-2">
            <div className="box-content showcase-content">
              {/* <div className="showcase-mini-text">lorem sumrini</div> */}
              <h3>Provide Education</h3>
              <p>
              Prepare our Youth to provide a comprehensive response to the educational, social, and emotional, needs of children, youth, families and communities.
              </p>
            </div>
          </div>
          <div className="box showcase-3">
            <div className="box-content showcase-content">
              {/* <div className="showcase-mini-text">lorem sumrini</div> */}
              <h3>Provide Resources</h3>
              <p>
                Strives to enhance the merchandise available to teachers by providing them with useful, valuable products
                at no cost to the students or families.
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
