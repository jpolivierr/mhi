import React, { useState, useEffect } from "react"

const Field3 = (props) => {
  const [review, setReview] = useState({
    price: "",
    donateType: "",
  })
  const [form, setForm] = useState({
    cardHolderName: "",
    cardNumber: "",
    exp: "",
    securityCode: "",
  })
  const [errStyle, setErrStyle] = useState({
    cardHolderNameError: "",
    cardNumberError: "",
    expError: "",
    securityCodeError: "",
  })
  const errorHandler = () => {
    const errStyleCopy = errStyle
    const formCopy = form
    let errFound = false
    if (form.cardHolderName === "") {
      errStyleCopy.cardHolderNameError = "error-handler"
    } else {
      errStyleCopy.cardHolderNameError = ""
    }
    if (form.cardNumber === "") {
      errStyleCopy.cardNumberError = "error-handler"
    } else {
      errStyleCopy.cardNumberError = ""
    }
    if (form.exp === "") {
      errStyleCopy.expError = "error-handler"
    } else {
      errStyleCopy.expError = ""
    }
    if (form.securityCode === "") {
      errStyleCopy.securityCodeError = "error-handler"
    } else {
      errStyleCopy.securityCodeError = ""
    }
    for (let KEY in formCopy) {
      const value = formCopy[KEY]

      if (value.trim() === "") {
        errFound = true
        break
      }
    }

    if (!errFound) {
      localStorage.setItem("user-basic-info", JSON.stringify(form))
      props.field1result()
    }
    setErrStyle({ ...errStyle }, errStyleCopy)
  }

  useEffect(() => {
    const pmtInfo = JSON.parse(localStorage.getItem("user-pmt-info"))
    const basicInfo = JSON.parse(localStorage.getItem("user-basic-info"))
    const reviewCopy = review
    if (pmtInfo !== null) {
      // setReview({...review, price: pmtInfo.custom})
      reviewCopy.price = pmtInfo.custom
      const type = pmtInfo.typeOfDonation.find((value) => {
        return value.selected === true
      })
      if (type.id === "1-time") {
        reviewCopy.donateType = "One-Time"
      } else if (type.id === "1-monthly") {
        reviewCopy.donateType = "Monthly"
      }
    } else {
      // setForm(dataStored)
    }
    setReview({ ...review }, reviewCopy)
  }, [])

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "cardHolderName":
        setForm({ ...form, cardHolderName: e.target.value })
        break
      case "cardNumber":
        setForm({ ...form, cardNumber: e.target.value })
        break
      case "exp":
        setForm({ ...form, exp: e.target.value })
        break
      case "securityCode":
        setForm({ ...form, securityCode: e.target.value })
        break
      default:
        break
    }
  }

  const prevPage = () => {
    props.prevPage()
  }
  const submit = () => {
    errorHandler()
  }
  return (
    <div className="Field">
      <div className="header-section">
        <h3>Payment Info</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>
      <div className="block">
        <h4>Review</h4>
        <div className="block-button-container">
          <div className="block-button block-price">TOTAL: ${review.price}</div>
          <div className="block-button block-price">{review.donateType}</div>
        </div>
      </div>
      <div className="block">
        <h4>Card Info</h4>
        <div className="block-button-container">
          <input
            className={errStyle.cardHolderNameError}
            value={form.cardHolderName}
            onChange={(e) => changeHandler(e)}
            id="cardHolderName"
            type="text"
            placeholder="*Card Holder Name"
          />
          <input
            className={errStyle.cardNumberError}
            value={form.cardNumber}
            onChange={(e) => changeHandler(e)}
            id="cardNumber"
            type="text"
            placeholder="*Card Number"
          />
          <input
            className={errStyle.expError}
            value={form.exp}
            onChange={(e) => changeHandler(e)}
            id="exp"
            type="text"
            placeholder="*Exp MM/YY"
          />
          <input
            className={errStyle.securityCodeError}
            value={form.securityCode}
            onChange={(e) => changeHandler(e)}
            id="securityCode"
            type="text"
            placeholder="*Security Code"
          />
        </div>
      </div>
      <div className="navigation-section">
        <div className="next-button back-button" onClick={() => prevPage()}>
          BACK
        </div>
        <div className="next-button submit-button" onClick={() => submit()}>
          submited
        </div>
      </div>
    </div>
  )
}

export default Field3
