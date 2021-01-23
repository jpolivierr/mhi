import "./News.css"
import TitleSection from "../Title-section/titleSection"

function News() {
  return (
    <div className="section-style news-section ">
      <div className="content-box-container news-box-container ">
        <TitleSection
          transparentText="News"
          miniText="News"
          title="Latest News"
          titleContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
        />
        <div className="news-container">
          <div className="news news-1">
            <div className="showcase-mini-text">January, 10, 2021</div>
            <h3>Provide Education</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              amet vel delectus totam officia nisi? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Laborum amet vel delectus totam
              officia nisi?
            </p>
          </div>
          <div className="news news-2">
            <div className="showcase-mini-text">January, 1, 2021</div>
            <h3>Provide Education</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              amet vel delectus totam officia nisi?Lorem ipsum dolor.
            </p>
          </div>
          <div className="news news-3">
            <div className="showcase-mini-text">December, 23, 2020</div>
            <h3>Provide Education</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              amet vel delectus totam officia nisi?Lorem ipsum dolor.
            </p>
          </div>
        </div>
      </div>
      <div className="circles circle-for-news ">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}

export default News
