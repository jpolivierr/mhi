import "./JoinUs.css"

function JoinUs() {
  return (
    <div className="section-style join-us">
      <div className="content-box-container">
        <form className="join-us-form" action="">
          <h2>Join Us Today!</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, nobis.</p>
          <div className="input-style">
            <input type="text" placeholder="*First Name" />
            <input type="text" placeholder="*Last Name" />
            <input type="email" placeholder="*E-mail" />
            <input type="text" placeholder="Phone # (optional)" />
          </div>
          <button className="main-button">SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default JoinUs
