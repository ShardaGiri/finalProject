import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const liveGoldRates = () => {
    fetch('http://www.paisabazaar.com/gold-rate/')
      .then(response => response.json())
      .then(data => this.setState({ totalReactPackages: data.total }));


  };
  return (
    <div className="FooterBody">
      <MDBContainer className="mt-5 mb-5 text-center text-md-left">
        <MDBRow className="mt-3">

          <MDBCol md="3" lg="3" xl="3" className="mb-4-company">
            <p className="links">
              <NavLink to="/offers" className="Footer-NavLink">
                Terms and Conditions
                     </NavLink>
            </p>
            <p className="links">
              <NavLink to="/offers" className="Footer-NavLink">
                Cancellation,Return,Exchange & Shipping Policy
                     </NavLink>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>ABOUT US</strong>
            </h6>

            <hr style={{ width: "200px" }} />
            <p className="links">
              <NavLink to="/offers" className="Footer-NavLink">
                Who we are?
                     </NavLink>
            </p>
            <p className="links">
              <NavLink className="Footer-NavLink" to="/offers"  >
                Management Team
              </NavLink>
            </p>

          </MDBCol>
          <MDBCol md="3" lg="3" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>CONTACT US</strong>
            </h6>
            <hr style={{ width: "200px" }} />
            <p className="links">
              <NavLink className="Footer-NavLink" to="/FAQ"  >
                FAQ
                     </NavLink>
            </p>
            <p className="links">
              <NavLink className="Footer-NavLink" to="/Contactus"  >
                Contact Us
                     </NavLink>
            </p>
            <p >
              (9 am-10 pm, 7 days a week)
            </p>
          </MDBCol>

          <MDBCol md="3" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Follow us</strong>
            </h6>
            <hr style={{ width: "200px" }} />
            <p className="icons">
              <a className="btn-floating btn-small btn-fb">
                <FaFacebookF size="20" /> Facebook
                  </a>
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <FaInstagram size="20" /> Instagram
                  </a>

              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <FaTwitter size="20" /> Twitter
                  </a>
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright">
        <MDBContainer fluid style={{ borderTop: 'solid 1px white' }} >
          &copy; {new Date().getFullYear()} Copyright:
        </MDBContainer>
      </div>
    </div>
  )
}