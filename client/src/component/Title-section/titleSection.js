import "./titleSection.css"

function TitleSection(props) {
  return (
    <div className="title-section">
      <div className="title-top-container">
        <div style={props.color} className="transparent-text">{props.transparentText}</div>
        <p className="mini-text">{props.miniText}</p>
      </div>

      <div className="title-bottom-container">
        <h2>{props.title}</h2>
        <p className="title-content">
          {props.titleContent}
        </p>
      </div>
    </div>
  )
}

export default TitleSection
