import './Footer.css'

function Footer (){
    return(
        <div className="section-style footer ">
        <div className="content-box-container footer-box-container ">
        <div className="footer-container">
            <div className="section contact-us">
            <h3>CONTACT US</h3>
             <ul>
                 <li>18680 NE 2nd Avenue Miami, FL 33179</li>
                 <li>info@ourmhi.org</li>
                 <li>786-859-7789</li>
             </ul>
            </div>
            <div className="section social-media">
            <h3>SOCIAL MEDIA</h3>
            <p>Lorem ipsum dolor, sit amet </p>
            </div>
            <div className="section footer-navigation">
            <h3>NAVIGATION</h3>
            <ul>
                <li>Home</li>
                <li>Who We Are</li>
                <li>Lend a Hand</li>
                <li>Projects</li>
            </ul>
            </div>
            {/* <div className="section subscribe">
            <h3>SUBSCRIBE</h3>
             <form action="">
                 <input type="text" place/>
             </form>
            </div> */}
            <div className="copy-right">
            © 2019 Many Hands International, Inc.  A 501 (c)(3) Non-Profit Organization,  Helping The Underserved in our community and Haiti. All Rights Reserved - Many Hands International, Inc www.ourmhi.org
            </div>
        </div>
        </div>
        
      </div>
    )
}

export default Footer