import './Navigation.css'

function Navigation (){
    return(
        <div className="navigation">
            <div className="nav-bar">
                <div className="logo"> <strong>MHI</strong>  </div>
                <div className="menu">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <div className="donate-button">
                    DONATE
                </div>
            </div>
        </div>
    )
}

export default Navigation