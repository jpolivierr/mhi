import "./JoinUs.css"
import { useState } from "react"
import formValidator from "../formValidator"

function JoinUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    msg: { value: "", style: "" },
  })
  const [formResult, setFormResult] = useState({
    errorFound: false,
    name: { value: "", error: false, errorMsg: "", errorStyle: "" },
    email: { value: "", error: false, errorMsg: "", errorStyle: "" },
  })

  const submit = (e) => {
    e.preventDefault()
    if (!formValidator(form, "joinUsForm").errorFound) {
      setForm({
        ...form,
        name: "",
        email: "",
        phone: "",
        msg: {
          value: "Your information was sent. Thank you!",
          style: "success-msg",
        },
      })
      setTimeout(() => {
        setForm({
          ...form,
          name: "",
          email: "",
          phone: "",
          msg: { value: "", style: "" },
        })
      }, 3000)
      setFormResult(formValidator(form, "joinUsForm"))
    } else {
      setFormResult(formValidator(form, "joinUsForm"))
    }
  }

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

  return (
    <div className="section-style join-us">
      <div className="content-box-container join-us-box-container">
        <form
          onSubmit={(e) => {
            submit(e)
          }}
          className="join-us-form"
          action=""
        >
          <h2>Join Us Today!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            nobis.
          </p>
          <div className="input-style">
            <div className={form.msg.style}>{form.msg.value}</div>
            <input
              className={formResult.name.errorStyle}
              onChange={(e) => updateValue(e)}
              id="name"
              type="text"
              placeholder="*Name"
              value={form.name}
            />
            <input
              className={formResult.email.errorStyle}
              onChange={(e) => updateValue(e)}
              id="email"
              type="email"
              placeholder="*E-mail"
              value={form.email}
            />
            <input
              onChange={(e) => updateValue(e)}
              type="text"
              placeholder="Phone # (optional)"
            />
          </div>
          <button className="main-button sign-up-button">SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default JoinUs
