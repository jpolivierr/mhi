import React from "react"

const Field2 = (props) => {
  const prevPage = () =>{
    props.prevPage()
  }
  const nextPage = () =>{
    props.nextPage()
  }
  return (
    <div className="Field">
      <div className="header-section">
        <h3>Personal Info</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>
      
      <div className="block">
        <h4>Basic Info</h4>
        <div className="block-button-container">
        <input type="text" placeholder='*First Name'/>
        <input type="text" placeholder='*Last Name'/>
        <input type="email" placeholder='*E-mail'/>
        <input type="text" placeholder='Phone'/>
        </div>
      </div>

      <div className="block">
        <h4>Address</h4>
        <div className="block-button-container address-boxx">
          <input type="text" placeholder='*Street Address'/>
          <input type="text" placeholder='*City'/>
          <input type="text" placeholder='*State'/>
          <input type="text" placeholder='*ZipCode'/>
        </div>
      </div>
      <div className="navigation-section">
            <div className="next-button back-button" onClick={() => prevPage()}>
              BACK
            </div>
            <div className="next-button" onClick={() => nextPage()}>
              NEXT
            </div>
          </div>
    </div>
  )
}

export default Field2
