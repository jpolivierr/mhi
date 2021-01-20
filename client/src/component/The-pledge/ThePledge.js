import "./ThePledge.css"

function ThePledge(props) {
  return (
    <div className="section-style the-pledge">
      <div className="the-pledge-background"></div>
      <div className="content-box-container with-pledge ">
        
        <div className="content-box the-pledge-content-box">
          <h2>
            Take <br></br> The Pledge
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            alias eveniet nihil accusamus corrupti! Est ipsum esse, placeat et
            sequi exercitationem rem ratione minima, necessitatibus eligendi
            incidunt facilis modi recusandae.
          </p>
        </div>
        <div className="mission-box-img with-pledge"></div>
      </div>
      <div className="circles circles-for-pledge">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}

export default ThePledge
