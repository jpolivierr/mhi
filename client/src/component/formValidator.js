const formValidator = (formField, formType) => {
  if (formType === "contactForm") {
    const formResult = {
      errorFound: false,
      name: { value: "", error: false, errorMsg: "", errorStyle: "" },
      email: { value: "", error: false, errorMsg: "", errorStyle: "" },
      message: { value: "", error: false, errorMsg: "", errorStyle: "" },
    }

    if (formField.name === "") {
      formResult.name.error = true
      formResult.name.errorStyle = "error-handler"
      formResult.name.errorMsg = "A name is required"
    } else {
      formResult.name.value = formField.name
      formResult.name.error = false
      formResult.name.errorMsg = ""
      formResult.name.errorStyle = ""
    }
    if (formField.email === "") {
      formResult.email.error = true
      formResult.email.errorStyle = "error-handler"
      formResult.email.errorMsg = "An email is required"
    } else {
      formResult.email.value = formField.email
      formResult.email.error = false
      formResult.email.errorMsg = ""
      formResult.email.errorStyle = ""
    }
    if (formField.message === "") {
      formResult.message.error = true
      formResult.message.errorStyle = "error-handler"
      formResult.message.errorMsg = "A message is required"
    } else {
      formResult.message.value = formField.message
      formResult.message.error = false
      formResult.message.errorMsg = ""
      formResult.message.errorStyle = ""
    }

    const nameError = formResult.name.error
    const emailError = formResult.email.error
    const messageError = formResult.message.error

    if (nameError || emailError || messageError) {
      formResult.errorFound = true
    }
    return formResult
  }
  if (formType === "joinUsForm") {
    const formResult = {
      errorFound: false,
      name: { value: "", error: false, errorMsg: "", errorStyle: "" },
      email: { value: "", error: false, errorMsg: "", errorStyle: "" },
    }

    if (formField.name === "") {
      formResult.name.error = true
      formResult.name.errorStyle = "error-handler"
      formResult.name.errorMsg = "A name is required"
    } else {
      formResult.name.value = formField.name
      formResult.name.error = false
      formResult.name.errorMsg = ""
      formResult.name.errorStyle = ""
    }
    if (formField.email === "") {
      formResult.email.error = true
      formResult.email.errorStyle = "error-handler"
      formResult.email.errorMsg = "An email is required"
    } else {
      formResult.email.value = formField.email
      formResult.email.error = false
      formResult.email.errorMsg = ""
      formResult.email.errorStyle = ""
    }

    const nameError = formResult.name.error
    const emailError = formResult.email.error

    if (nameError || emailError ) {
      formResult.errorFound = true
    }
    return formResult
  }
}

export default formValidator
