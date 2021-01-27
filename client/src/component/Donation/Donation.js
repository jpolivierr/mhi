import React, { useState } from "react"
import Field1 from "./Field1"
import Field2 from "./Field2"
import Field3 from "./Field3"
import "./Donation.css"

const Donation = (props) => {
  const [field, setField] = useState({ page: 1 })

  const nextPage = () => {
    setField({ ...field, page: field.page + 1 })
  }
  const prevPage = () => {
    setField({ ...field, page: field.page - 1 })
  }
  // const submit = () => {
  //   return null
  // }


  const displayFields = () => {
    switch (field.page) {
      case 1:
        return <Field1 field1result = {nextPage} />
      case 2:
        return <Field2 prevPage = {prevPage} nextPage = {nextPage} />
      case 3:
        return <Field3 />
      default:
        return <Field1 />
    }
  }
  // const displayButtons = () => {
  //   switch (field.page) {
  //     case 1:
  //       return (
  //         <div className="navigation-section">
  //           <div className="next-button" onClick={() => nextPage()}>
  //             NEXT
  //           </div>
  //         </div>
  //       )
  //     case 2:
  //       return (
  //         <div className="navigation-section">
  //           <div className="next-button back-button" onClick={() => prevPage()}>
  //             BACK
  //           </div>
  //           <div className="next-button" onClick={() => nextPage()}>
  //             NEXT
  //           </div>
  //         </div>
  //       )
  //     case 3:
  //       return (
  //         <div className="navigation-section">
  //           <div className="next-button back-button" onClick={() => prevPage()}>
  //             BACK
  //           </div>
  //           <div className="next-button s-button" onClick={() => submit()}>
  //             SUBMIT
  //           </div>
  //         </div>
  //       )
  //     default:
  //       return null
  //   }
  // }
  return (
    <div className="donation">
      <div className="top-section">
        <div className="close-btn" onClick={() => props.close()}>
          +
        </div>
      </div>
      {displayFields()}
      {/* {displayButtons()} */}
    </div>
  )
}

export default Donation
