import './Navigation.css'

function Navigation (props){
    return(
        <div className="navigation">
          <div className="nav-background-color"></div>
            <div className="nav-bar">
                <div className="logo"> <strong>MHI</strong>  </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Projects</li>
                    <li>Contact Us</li>
                </ul>
                <div className="menu">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <div className="donate-button"
                onClick = {()=>{props.Modal()}}
                >
                    DONATE
                </div>
            </div>
        </div>
    )
}

export default Navigation