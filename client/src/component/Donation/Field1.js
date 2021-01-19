import React, { useState } from "react"

const Field1 = (props) => {
  //set variables for each field
  const [customDollars, setCustomDollars] = useState("")
  const [formSelection, setFormSelection] = useState({
    completed: false,
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

  const errorHandler = () => {
    const errorData = errors
    const paymentresult = formSelection.paymentMethod.find((value) => {
      return value.selected === true
    })
    const typeOfDonationresult = formSelection.typeOfDonation.find((value) => {
      return value.selected === true
    })
    const convertCustomDollars = parseInt(customDollars)
    if (paymentresult === undefined) {
      errorData.errorFound = true
      errorData.pmError = 'Please select a payment method'
    } else {
      errorData.errorFound = false
      errorData.pmError = ''
    }
    if (typeOfDonationresult === undefined) {
      errorData.errorFound = true
      errorData.tdError = 'Please select a type of donation'
    } else {
      errorData.errorFound = false
      errorData.tdError = ''
    }
    if (isNaN(convertCustomDollars) || convertCustomDollars < 1) {
      errorData.errorFound = true
      errorData.caError = 'Please select a valide amount'
    }else{
      errorData.errorFound = false
      errorData.caError = ''
    }
    if(errorData.errorFound === true){
      setErrors({...errors, errorData})
    }else {
      setErrors({...errors, errorData})
      props.field1result()
    }
    
  }

  // console.log(errors)
  const nextPage = () => {
    errorHandler()
  }

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
        if (e.target.dataset.pid === option.id) {
          option.selected = true
          option.style = "selected-btn"
          setCustomDollars(parseInt(e.target.innerText.slice(1)))
        } else {
          option.selected = false
          option.style = ""
        }
      })
      setFormSelection({ ...formSelection, selectedAmout: options })
    }
    if (e.target.dataset.type === "TD") {
      console.log("activate")
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
  }

  const customAmount = (e) => {
    console.log(e.target.value)
    setCustomDollars(e.target.value)
  }

  const cdStyle = formSelection.paymentMethod[0].style
  const paypalStyle = formSelection.paymentMethod[1].style
  const cashappStyle = formSelection.paymentMethod[2].style

  const sa15 = formSelection.selectedAmout[0].style
  const sa30 = formSelection.selectedAmout[1].style
  const sa50 = formSelection.selectedAmout[2].style
  const sa100 = formSelection.selectedAmout[3].style

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
            onClick={(e) => setSelection(e)}
            className={`block-button ${paypalStyle}`}
          >
            <div className="card-icon" id="paypal-logo"></div> Paypal
          </div>
          <div
            data-type="PM"
            data-pid="1ca"
            onClick={(e) => setSelection(e)}
            className={`block-button ${cashappStyle}`}
          >
            <div className="card-icon" id="cash-app-logo"></div> CashApp
          </div>
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
        </div>
      </div>

      <div className="block">
        <div className="pm-error">{errors.caError}</div>
        <h4>Custom Amount</h4>
        <div className="block-button-container c-input ">
          <input
            className="custom-input"
            onChange={(e) => customAmount(e)}
            type="text"
            placeholder="0"
            value={customDollars}
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
        <div className="next-button" onClick={() => nextPage()}>
          NEXT
        </div>
      </div>
    </div>
  )
}

export default Field1
