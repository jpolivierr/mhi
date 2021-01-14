import React from "react"
import "./Donation.css"

const Donation = (props) => {
  return (
    <div className="donation">
      <div className="top-section">
        <div className="close-btn" onClick={() => props.close()}>
          +
        </div>
      </div>
      <div className="">
            <h2>Take <br></br> The Pledge</h2>
            {/* <div className="sub-title">Support our kids in haiti.</div> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
              alias eveniet nihil accusamus corrupti! Est ipsum esse, placeat et
              sequi exercitationem rem ratione minima, necessitatibus eligendi
              incidunt facilis modi recusandae.
            </p>
            <div className="main-button">SUPPORT US</div>
          </div>
    </div>
  )
}

export default Donation
