import React, { useState, useEffect } from "react"

const Field2 = (props) => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })
  const [errStyle, setErrStyle] = useState({
    fNameError: "",
    lNameError: "",
    emailError: "",
    phoneError: "",
    addressError: "",
    cityError: "",
    stateError: "",
    zipError: "",
  })

  useEffect(() => {
    const dataStored = JSON.parse(localStorage.getItem("user-basic-info"))
    if (dataStored === null) {
      return null
    } else {
      setForm(dataStored)
    }
  }, [])

  const errorHandler = () => {
    const errStyleCopy = errStyle
    let errFound = false
    if (form.fName === "") {
      errStyleCopy.fNameError = "error-handler"
    } else {
      errStyleCopy.fNameError = ""
    }
    if (form.lName === "") {
      errStyleCopy.lNameError = "error-handler"
    } else {
      errStyleCopy.lNameError = ""
    }
    if (form.email === "") {
      errStyleCopy.emailError = "error-handler"
    } else {
      errStyleCopy.emailError = ""
    }
    if (form.address === "") {
      errStyleCopy.addressError = "error-handler"
    } else {
      errStyleCopy.addressError = ""
    }
    if (form.city === "") {
      errStyleCopy.cityError = "error-handler"
    } else {
      errStyleCopy.cityError = ""
    }
    if (form.state === "") {
      errStyleCopy.stateError = "error-handler"
    } else {
      errStyleCopy.stateError = ""
    }
    if (form.zip === "") {
      errStyleCopy.zipError = "error-handler"
    } else {
      errStyleCopy.zipError = ""
    }
    for (let KEY in errStyleCopy) {
      const value = errStyleCopy[KEY]
      if (value !== "") {
        errFound = true
        break
      }
    }

    if (!errFound) {
      console.log('fired...')
      localStorage.setItem("user-basic-info", JSON.stringify(form))
      props.nextPage()
    }
    setErrStyle({ ...errStyle }, errStyleCopy)
  }
  const changeHandler = (e) => {
    switch (e.target.id) {
      case "fname":
        setForm({ ...form, fName: e.target.value })
        break
      case "lname":
        setForm({ ...form, lName: e.target.value })
        break
      case "email":
        setForm({ ...form, email: e.target.value })
        break
      case "phone":
        setForm({ ...form, phone: e.target.value })
        break
      case "address":
        setForm({ ...form, address: e.target.value })
        break
      case "city":
        setForm({ ...form, city: e.target.value })
        break
      case "state":
        setForm({ ...form, state: e.target.value })
        break
      case "zip":
        setForm({ ...form, zip: e.target.value })
        break
      default:
        break
    }
  }

  const prevPage = () => {
    localStorage.setItem("user-basic-info", JSON.stringify(form))
    props.prevPage()
  }
  const nextPage = () => {
    errorHandler()
    // props.nextPage()
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
          <input
            className={errStyle.fNameError}
            value={form.fName}
            onChange={(e) => changeHandler(e)}
            id="fname"
            type="text"
            placeholder="*First Name"
          />
          <input
            className={errStyle.lNameError}
            value={form.lName}
            onChange={(e) => changeHandler(e)}
            id="lname"
            type="text"
            placeholder="*Last Name"
          />
          <input
            className={errStyle.emailError}
            value={form.email}
            onChange={(e) => changeHandler(e)}
            id="email"
            type="email"
            placeholder="*E-mail"
          />
          <input
            value={form.phone}
            onChange={(e) => changeHandler(e)}
            id="phone"
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="block">
        <h4>Address</h4>
        <div className="block-button-container address-boxx">
          <input
            className={errStyle.addressError}
            value={form.address}
            onChange={(e) => changeHandler(e)}
            id="address"
            type="text"
            placeholder="*Street Address"
          />
          <input
            className={errStyle.cityError}
            value={form.city}
            onChange={(e) => changeHandler(e)}
            id="city"
            type="text"
            placeholder="*City"
          />
          <input
            className={errStyle.stateError}
            value={form.state}
            onChange={(e) => changeHandler(e)}
            id="state"
            type="text"
            placeholder="*State"
          />
          <input
            className={errStyle.zipError}
            value={form.zip}
            onChange={(e) => changeHandler(e)}
            id="zip"
            type="text"
            placeholder="*ZipCode"
          />
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
