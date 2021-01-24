import "./App.css"
import "./Mobile.css"
import Home from "./pages/home"
import Donation from "./component/Donation/Donation"
import Modal from "./component/Modal/Modal"
import Navigation from "./component/Navigation/Navigation"
import Footer from "./component/Footer/Footer"
import QuickNav from './component/Quick-nav/Quicknav'
import { useState } from "react"

function App() {
  const [modal, setModalStatus] = useState({
    menu: true,
    donation: true,
    styling: "",
  })

  const donationstatus = () => {
    setModalStatus({ ...modal, donation: !modal.donation })
  }
  const menustatus = () => {
    setModalStatus({ ...modal, menu: !modal.menu })
  }
  
  const openMenu = () => {
    console.log("clicked")
    setModalStatus({ ...modal, menu: !modal.menu, })
  }
  console.log(modal)
  const displayModal = () => {
    if (modal.donation === false) {
      return (
        <div>
          <Modal Modal={donationstatus} />
          <Donation close={donationstatus} modalStyling={modal.styling} />
        </div>
      )
    }
    if (modal.menu === false) {
      return (
        <div>
          <Modal Modal={menustatus} />
          <QuickNav Modal={menustatus} />
        </div>
      )
    }
  }

  return (
    <div className="App">
      {displayModal()}
      {/* {displayMenu()} */}
      <Navigation Modal={donationstatus} Menu={openMenu} />
      <Home donate={donationstatus} />
      <Footer />
    </div>
  )
}

export default App
