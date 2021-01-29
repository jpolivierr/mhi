import React, { useEffect } from "react"
import TitleSection from "../Title-section/titleSection"
import video1 from "../../video/vid1.mp4"
import video2 from "../../video/vid2.mp4"
import video3 from "../../video/vid3.mp4"

import "./PageGrid.css"

const AboutPageGrid = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
  return (
    <div className="section-style">
      <div className="content-box-container page-grid-container">
        <div className="page-content-grid">
          <h2>Who We Are</h2>
          <p>
            Many Hands International is a 501(c)(3) non-profit organization
            created to meet the needs of disadvantaged people living in our
            community and Haiti. The mission to help children while helping
            their parents is broad in conception, with the aim of providing them
            with the essentials of life: food, clothing, healthcare and
            education. We are beginning small, looking first to help with
            education. As we grow and acquire sufficient funding, we then plan
            to purchase land and establish a boarding school in Cap-Haitien
            Haiti where orphans or abandoned children can find a home and obtain
            food and healthcare.
          </p>
        </div>
        <div className="about-page-img"></div>
      </div>
      <div className="circles circles-for-mision">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}

export default AboutPageGrid

export const ProjectPageGrid = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
  return (
    <div className="section-style">
      <div className="content-box-container page-grid-container projects-content-grid">
        <TitleSection
          transparentText="PROGRAMS"
          miniText="Programs"
          title="MHI CUP"
          titleContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit harum doloribus odio, libero at atque commodi."
        />
        <div className="project-page-img">
          <div className="video video1">
            <video width="" height="" controls>
              <source src={video1} type="video/mp4"></source>
            </video>
          </div>
          <div className="video video2">
            <video width="" height="" controls>
              <source src={video2} type="video/mp4"></source>
            </video>
          </div>
          <div className="video video3">
            <video width="" height="" controls>
              <source src={video3} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      <div className="circles circles-for-mision">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}

export const ContactPageGrid = () => {
  return (
    <div className="section-style">
      <div className="content-box-container page-grid-container">
        <div className="page-content-grid">
          <h2>Connect With us</h2>
          <p>
            CONNECT WITH US Do you have questions or are you looking to
            volunteer? Please connect with us
          </p>
          <ul className="contact-info-list">
            <li>
              <i className="fas fa-phone"></i> <p>Miami: (305) 984-7446</p>{" "}
            </li>
            <li>
              <i className="fas fa-phone"></i> <p>Haiti: (509) 3-324-4811</p>{" "}
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <p>
                {" "}
                18680 NE 2nd Avenue <br /> Miami, Florida 33179
              </p>
            </li>
            <li>
              {" "}
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@ourmhi.org">info@ourmhi.org</a>{" "}
            </li>
          </ul>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="subject" />
          <input type="text" placeholder="Phone" />
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="20"
            rows="5"
          ></textarea>
          <button className="main-button form-button">Submit</button>
        </form>
      </div>
      <div className="circles circles-for-mision">
        <div className="inner-circle-1"></div>
        <div className="inner-circle-2"></div>
        <div className="inner-circle-3"></div>
      </div>
    </div>
  )
}
