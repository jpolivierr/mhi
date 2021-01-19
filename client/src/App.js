import "./App.css"
import Home from "./pages/home"
import Donation from "./component/Donation/Donation"
import Modal from "./component/Modal/Modal"
import Navigation from "./component/Navigation/Navigation"
import Footer from "./component/Footer/Footer"
import { useState } from "react"

function App() {
  const [modal, setModalStatus] = useState({
    status: true,
    styling: "",
  })

  const modalstatus = () => {
    setModalStatus({ ...modal, status: !modal.status })
  }

  const displayModal = () => {
    if (modal.status === false) {
      return (
        <div>
          <Modal Modal={modalstatus} />
          <Donation close={modalstatus} modalStyling={modal.styling} />
        </div>
      )
    } else {
      //  setModalStatus({ ...modal, styling: "animation: modalOut .3s linear" })
      //  return(
      //    <Modal Modal={modalstatus}
      //   modalStyling= {{animation: 'modalOut .3s linear forwards'}}  />
      //  )
      return null
    }
  }

  return (
    <div className="App">
      {displayModal()}
      <Navigation Modal={modalstatus} />
      <Home donate={modalstatus} />
      <Footer />
    </div>
  )
}

export default App
