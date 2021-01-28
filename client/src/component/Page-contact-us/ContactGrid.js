import { useEffect, useState } from "react"
import formValidator from "../formValidator"
import "./ContactGrid.css"

const ContactPageGrid = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formResult, setFormResult] = useState({
    errorFound: false,
    name: { value: "", error: false, errorMsg: "", errorStyle: "" },
    email: { value: "", error: false, errorMsg: "", errorStyle: "" },
    message: { value: "", error: false, errorMsg: "", errorStyle: "" },
  })

  const updateValue = (e) => {
    switch (e.target.id) {
      case "name":
        setForm({ ...form, name: e.target.value })
        break
      case "email":
        setForm({ ...form, email: e.target.value })
        break
      case "phone":
        setForm({ ...form, phone: e.target.value })
        break
      case "message":
        setForm({ ...form, message: e.target.value })
        break
      default:
        break
    }
  }

  const submit = (e) => {
    e.preventDefault()
    if (!formValidator(form).errorFound) {
        setForm({...form, name: '',email: '', phone: '', message: ''})
        setFormResult(formValidator(form))
    } else {
      setFormResult(formValidator(form))
    }
  }

  return (
    <div className="section-style">
      <div className="content-box-container page-grid-container">
        <div className="page-content-grid">
          <h2>Connect With us</h2>
          <p>
            CONNECT WITH US Do you have questions or are you looking to
            volunteer? Please connect with us
          </p>
          <ul className="contact-info-list">
            <li>
              <i className="fas fa-phone"></i> <p>Miami: (305) 984-7446</p>{" "}
            </li>
            <li>
              <i className="fas fa-phone"></i> <p>Haiti: (509) 3-324-4811</p>{" "}
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <p>
                {" "}
                18680 NE 2nd Avenue <br /> Miami, Florida 33179
              </p>
            </li>
            <li>
              {" "}
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@ourmhi.org">info@ourmhi.org</a>{" "}
            </li>
          </ul>
        </div>
        <form
          onSubmit={(e) => {
            submit(e)
          }}
          className="contact-form"
        >
          <input
            className={formResult.name.errorStyle}
            onChange={(e) => updateValue(e)}
            id="name"
            type="text"
            placeholder="Name"
            value={form.name}
          />
          <input
            className={formResult.email.errorStyle}
            onChange={(e) => updateValue(e)}
            id="email"
            type="email"
            placeholder="email"
            value={form.email}
          />
          <input
            id="phone"
            onChange={(e) => updateValue(e)}
            type="text"
            placeholder="Phone"
            value={form.phone}
          />
          <textarea
            className={formResult.message.errorStyle}
            onChange={(e) => updateValue(e)}
            value={form.message}
            placeholder="Message"
            name=""
            id="message"
            cols="20"
            rows="5"
          ></textarea>
          <button className="main-button form-button">Submit</button>
        </form>
      </div>
      <div className="circles circles-for-mision">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}

export default ContactPageGrid
