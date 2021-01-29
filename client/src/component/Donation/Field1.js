import React, { useState, useEffect } from "react"

const Field1 = (props) => {
  //set variables for each field
  const [formSelection, setFormSelection] = useState({
    completed: false,
    custom: "",
    paymentMethod: [
      { id: "1dc", selected: false, style: "" },
      { id: "1pp", selected: false, style: "" },
      { id: "1ca", selected: false, style: "" },
    ],
    selectedAmout: [
      { id: "1-15", selected: false, style: "" },
      { id: "1-30", selected: false, style: "" },
      { id: "1-50", selected: false, style: "" },
      { id: "1-100", selected: false, style: "" },
      { id: "1-other", selected: false, style: "" },
    ],
    typeOfDonation: [
      { id: "1-time", selected: false, style: "" },
      { id: "1-monthly", selected: false, style: "" },
    ],
  })
  const [errors, setErrors] = useState({
    errorFound: false,
    pmError: "",
    caError: "",
    tdError: "",
  })

  useEffect(() => {
    const dataStored = JSON.parse(localStorage.getItem("user-pmt-info"))
    if (dataStored === null) {
      return null
    } else {
      setFormSelection(dataStored)
    }
  }, [])

  const errorHandler = () => {
    const errorResult = {
      pm: false,
      ca: false,
      td: false,
    }
    const errorData = errors
    const paymentresult = formSelection.paymentMethod.find((value) => {
      return value.selected === true
    })
    const typeOfDonationresult = formSelection.typeOfDonation.find((value) => {
      return value.selected === true
    })
    //payment Methods
    if (paymentresult === undefined) {
      errorData.errorFound = true
      errorResult.pm = true
      errorData.pmError = "Please select a payment method"
    } else {
      errorData.errorFound = false
      errorResult.pm = false
      errorData.pmError = ""
    }
    //type of donation
    if (typeOfDonationresult === undefined) {
      errorData.errorFound = true
      errorResult.td = true
      errorData.tdError = "Please select a type of donation"
    } else {
      errorData.errorFound = false
      errorResult.td = false
      errorData.tdError = ""
    }
    //custom amount
    if (isNaN(formSelection.custom) || formSelection.custom < 1) {
      errorData.errorFound = true
      errorResult.ca = true
      errorData.caError = "Please select a valide amount"
    } else {
      errorData.errorFound = false
      errorResult.ca = false
      errorData.caError = ""
    }
    if (errorResult.pm || errorResult.ca || errorResult.td) {
      setErrors({ ...errors, errorData })
    } else {
      setErrors({ ...errors, errorData })
      localStorage.setItem("user-pmt-info", JSON.stringify(formSelection))
      props.field1result()
    }
  }

  // console.log(errors)
  const nextPage = () => {
    errorHandler()
  }
  const prevPage = () => {
    // localStorage.setItem("user-pmt-info", JSON.stringify(formSelection))
    props.prevPage()
  }

  // const setSavedInfo = () => {
  //   setFormSelection(JSON.parse(localStorage.getItem("user-pmt-info")))
  // }

  const setSelection = (e) => {
    if (e.target.dataset.type === "PM") {
      let options = formSelection.paymentMethod
      options.forEach((option) => {
        if (e.target.dataset.pid === option.id) {
          option.selected = true
          option.style = "selected-btn"
        } else {
          option.selected = false
          option.style = ""
        }
      })
      setFormSelection({ ...formSelection, paymentMethod: options })
    }
    if (e.target.dataset.type === "SA") {
      let options = formSelection.selectedAmout
      options.forEach((option) => {
        if (option.id === "1-other") {
          option.selected = true
          option.style = ""
        } else if (e.target.dataset.pid === option.id) {
          option.selected = true
          option.style = ""
          setFormSelection({
            ...formSelection,
            custom: parseInt(e.target.innerText.slice(1)),
            selectedAmout: options,
          })
        } else {
          option.selected = false
          option.style = ""
        }
      })
    }
    if (e.target.dataset.type === "TD") {
      let options = formSelection.typeOfDonation
      options.forEach((option) => {
        if (e.target.dataset.pid === option.id) {
          option.selected = true
          option.style = "selected-btn"
        } else {
          option.selected = false
          option.style = ""
        }
      })
      setFormSelection({ ...formSelection, typeOfDonation: options })
    }
    if (e.target.dataset.type === "CA") {
      console.log(e.target.dataset.type)

      setFormSelection({ ...formSelection, custom: e.target.value })
    }
  }

  const cdStyle = formSelection.paymentMethod[0].style
  const paypalStyle = formSelection.paymentMethod[1].style
  const cashappStyle = formSelection.paymentMethod[2].style

  const sa15 = formSelection.selectedAmout[0].style
  const sa30 = formSelection.selectedAmout[1].style
  const sa50 = formSelection.selectedAmout[2].style
  const sa100 = formSelection.selectedAmout[3].style
  // const saother = formSelection.selectedAmout[4].style

  const tdOnetime = formSelection.typeOfDonation[0].style
  const tdMonthly = formSelection.typeOfDonation[1].style

  return (
    <div className="Field">
      <div className="header-section">
        <h3>Donate</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>

      <div className="block">
        <div className="pm-error">{errors.pmError}</div>
        <h4 className="">Preferred Payment Method</h4>
        <div className="block-button-container">
          {/* <div className="cards-logo"></div> */}
          <div
            data-type="PM"
            data-pid="1dc"
            onClick={(e) => setSelection(e)}
            className={`block-button ${cdStyle}`}
          >
            Debit/Credit
          </div>
          <div
            data-type="PM"
            data-pid="1pp"
            onClick={() => window.open("http://paypal.com")}
            className={`block-button ${paypalStyle}`}
          >
            <div className="card-icon" id="paypal-logo"></div> Paypal
          </div>
          {/* <div
            data-type="PM"
            data-pid="1ca"
            onClick={(e) => setSelection(e)}
            className={`block-button ${cashappStyle}`}
          >
            <div className="card-icon" id="cash-app-logo"></div> CashApp
          </div> */}
        </div>
      </div>

      <div className="block">
        <h4>Select an Amount</h4>
        <div className="block-button-container">
          <div
            onClick={(e) => setSelection(e)}
            data-type="SA"
            data-pid="1-15"
            className={`block-button block-price ${sa15}`}
          >
            $15
          </div>
          <div
            onClick={(e) => setSelection(e)}
            data-type="SA"
            data-pid="1-30"
            className={`block-button block-price ${sa30}`}
          >
            $30
          </div>
          <div
            onClick={(e) => setSelection(e)}
            data-type="SA"
            data-pid="1-50"
            className={`block-button block-price ${sa50}`}
          >
            $50
          </div>
          <div
            onClick={(e) => setSelection(e)}
            data-type="SA"
            data-pid="1-100"
            className={`block-button block-price ${sa100}`}
          >
            $100
          </div>
          {/* <div
            onClick={(e) => setSelection(e)}
            data-type="SA"
            data-pid="1-other"
            className={`block-button block-price ${saother}`}
          >
            Other
          </div> */}
        </div>
      </div>

      <div className="block">
        <div className="pm-error">{errors.caError}</div>
        <h4>Custom Amount</h4>
        <div className="block-button-container c-input ">
          <input
            data-type="CA"
            className="custom-input"
            onChange={(e) => setSelection(e)}
            type="text"
            placeholder="0"
            value={formSelection.custom}
          />
        </div>
      </div>

      <div className="block">
        <div className="pm-error">{errors.tdError}</div>
        <h4>Type of Donation</h4>
        <div className="block-button-container">
          <div
            className={`block-button at ${tdOnetime}`}
            onClick={(e) => setSelection(e)}
            data-type="TD"
            data-pid="1-time"
          >
            One-Time
          </div>
          <div
            className={`block-button ${tdMonthly}`}
            onClick={(e) => setSelection(e)}
            data-type="TD"
            data-pid="1-monthly"
          >
            Monthly
          </div>
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

export default Field1
