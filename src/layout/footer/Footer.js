import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBFooter className="text-center bg-gray-800" color="white">
      <MDBContainer className="p-4">
        <section className="mb-4">
        <button className="inline-block p-2 mr-1 ml-1 border  delay-100border-spacing-1 hover:text-gray-800 rounded-1 font-medium hover:bg-gray-100">
            <BiLogoFacebook />
            </button>
            <button className="inline-block p-2 mr-1 ml-1 delay-100 border border-spacing-1 hover:text-gray-800 rounded-1 font-medium hover:bg-gray-100">
            <BiLogoTwitter />
            </button>
            <button className="inline-block p-2 mr-1 ml-1 delay-100 border border-spacing-1 hover:text-gray-800 rounded-1 font-medium hover:bg-gray-100">
            <BiLogoInstagram/>
            </button>

            <button className="inline-block p-2 mr-1 ml-1 delay-100 border border-spacing-1 hover:text-gray-800 rounded-1 font-medium hover:bg-gray-100">
            <BiLogoLinkedin />
            </button>

          <button className="inline-block p-2 mr-1 ml-1 delay-100 border border-spacing-1 hover:text-gray-800 rounded-1 font-medium hover:bg-gray-100">
            <BiLogoGithub />
            </button>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <input
                  type="email"
                  class="block w-full rounded-md border-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email Address"
                />
              </MDBCol>

              <MDBCol size="auto">
              <button className="inline-block p-1.5 delay-100 border border-spacing-1 hover:text-gray-800 rounded-1 font-medium hover:bg-gray-100">
            Subscribe
            </button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 items-start">
              <h5 className="text-uppercase">Categories</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/mens"
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Man
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womens"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Womens
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kids"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Kids
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 items-start">
              <h5 className="text-uppercase">Quick Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/bot"
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Bot
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-profile/:id"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 items-start">
              <h5 className="text-uppercase">Organization</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/about"
                    className="text-gray-50 hover:text-gray-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 items-start">
              <h5 className="text-uppercase">Legal Terms</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/return-policy"
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-condition"
                    style={{ textDecoration: "none" }}
                    className="text-gray-50 hover:text-gray-400"
                  >
                    Terms & condition
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <Link className="text-white" to="/">
          QuirkCart.com
        </Link>
      </div>
    </MDBFooter>
  );
}
