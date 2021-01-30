import "./App.css"
import "./Mobile.css"
import Home from "./pages/home"
import Donation from "./component/Donation/Donation"
import Modal from "./component/Modal/Modal"
import Navigation from "./component/Navigation/Navigation"
import Footer from "./component/Footer/Footer"
import QuickNav from "./component/Quick-nav/Quicknav"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [modal, setModalStatus] = useState({
    menu: true,
    donation: true,
    styling: "",
  })
  
  const clearLocalStorage = ()=>{
    if(modal.menu || modal.donation){
      localStorage.removeItem('user-basic-info')
      localStorage.removeItem('user-pmt-info')
    }
  }
  clearLocalStorage()

  const donationstatus = () => {
    setModalStatus({ ...modal, donation: !modal.donation })
  }
  const menustatus = () => {
    setModalStatus({ ...modal, menu: !modal.menu })
  }

  const openMenu = () => {
    console.log("clicked")
    setModalStatus({ ...modal, menu: !modal.menu })
  }
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
    <Router>
      <div className="App">
        {displayModal()}
        {/* {displayMenu()} */}
        <Navigation Modal={donationstatus} Menu={openMenu} />
        <Switch>
          <Route
            path="/home"
            exact
            render={() => {
              return <Home donatez={donationstatus} />
            }}
          />
          
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Home} />

          {/* <Home donate={donationstatus} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
