import "./Showcase.css"

function Showcase(props) {
  return (
    <div className="showcase">
      <div className="showcase-box-container">
          <div className="showcase-img"></div>
        <div className="showcase-content showcase-content-box">
          <div className="sub-title">Success is inevitable</div>
          <h1>
            Empower <br /> With Education
          </h1>
          <p>
          Our vision is to develop servant leadership qualities in youth to prepare them to make social and economic contributions to their community and country.{" "}
          </p>
          <div className="main-button" onClick={() => props.Donate()}>
            SUPPORT US
          </div>
        </div>
      </div>
      <div className="circles circle-for-showcase ">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}

export default Showcase
