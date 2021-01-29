import React from "react"

const IntroPage = (props) => {
  const nextPage = () => {
    props.field1result()
  }
  return (
    <div className="Field">
      <div className="header-section">
        <h3>Thank You For Your Support</h3>
        <p>
          Hand in Hand refers to walking "Hand in Hand" with our students in Cap
          Haitien, Haiti. Walking along side our students means insuring that
          our students have the tools that we all need for a successful academic
          journey!{" "}
        </p>
      </div>
      <div className="block">
        <h3>YOUR DONATION ENSURE THESE TOOLS!</h3>
        <div className="boxes">
          <div className="box box-1">
            <h4>Books</h4>
            <div className="box-1-img"></div>
          </div>
          <div className="box box-2">
            <h4>Food</h4>
            <div className="box-2-img"></div>
          </div>
          <div className="box box-3">
            <h4>Toys</h4>
            <div className="box-3-img"></div>
          </div>
          <div className="box box-4">
            <h4>Uniform</h4>
            <div className="box-4-img"></div>
          </div>
        </div>
      </div>
      <div className="navigation-section">
        <div className="next-button " onClick={() => nextPage()}>
          Next
        </div>
      </div>
    </div>
  )
}

export default IntroPage
