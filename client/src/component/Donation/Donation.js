import React, { useState } from "react"
import IntroPage from "./IntroPage"
import SuccessPage from "./SuccessPage"
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
        return <IntroPage field1result={nextPage} />
      case 2:
        return <Field1 field1result={nextPage} prevPage={prevPage} />
      case 3:
        return <Field2 prevPage={prevPage} nextPage={nextPage} />
      case 4:
        return <Field3 field1result={nextPage} prevPage={prevPage} />
      case 5:
        return <SuccessPage prevPage={prevPage} />
      default:
        return <Field1 />
    }
  }

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
