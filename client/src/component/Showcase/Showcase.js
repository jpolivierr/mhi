import './Showcase.css'

function Showcase(props){
    return(
    <div className="showcase">
        <div className="showcase-img">
        </div>
        <div className="showcase-content">
            <div className="sub-title">Success is inevitable</div>
            <h1>Empower With Education</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <div className="main-button" onClick = {()=> props.Donate()}>SUPPORT US</div>
        </div>
        
    </div>
    )
}

export default Showcase