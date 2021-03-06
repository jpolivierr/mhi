import './Impact.css'
import TitleSection from "../Title-section/titleSection"

function Impact (props){
    return(
        <div className="section-style impact">
         <div className="impact-img"></div>
        <div className="content-box-container impact-container">
        <TitleSection
          color = {{color: 'white'}}
          transparentText="IMPACT"
          miniText="contribution"
          title="Make An Impact"
          titleContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit harum doloribus odio, libero at atque commodi."
        />
        <div className="main-button" onClick = {()=> props.Donate()}>SUPPORT US</div>
        </div>
        
      </div>
    )
}

export default Impact 