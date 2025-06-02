import React from "react";

const Header = () => {
  return (
    <>
      <header  className="main-header">
        <div  className="header-sticky">
          <nav  className="navbar navbar-expand-lg">
            <div  className="container">
              <a  className="navbar-brand" href="./">
                <img src="images/logo.svg" alt="Logo" />
              </a>

              <div  className="collapse navbar-collapse main-menu">
                <div  className="nav-menu-wrapper">
                  <ul  className="navbar-nav mr-auto" id="menu">
                    <li  className="nav-item">
                      <a  className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li  className="nav-item">
                      <a  className="nav-link" href="/about">
                        About Us
                      </a>
                    </li>
                    <li  className="nav-item">
                      <a  className="nav-link" href="/services">
                        Services
                      </a>
                    </li>
                    <li  className="nav-item submenu">
                      <a  className="nav-link" href="#">
                        Pages
                      </a>
                      <ul>
                        <li  className="nav-item">
                          <a  className="nav-link" href="service-single.html">
                            Service Details
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="blog-single.html">
                            Blog Details
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="projects.html">
                            Projects
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="project-single.html">
                            Project details
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="team.html">
                            Our Team
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="team-single.html">
                            Team Details
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="pricing.html">
                            Pricing Plan
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="testimonials.html">
                            Testimonials
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="image-gallery.html">
                            Image Gallery
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="video-gallery.html">
                            Video Gallery
                          </a>
                        </li>
                        <li  className="nav-item">
                          <a  className="nav-link" href="faqs.html">
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li  className="nav-item">
                      <a  className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="btn">
                  <a href="/login" className="btn-default btn-highlighted">
                    Sign In
                  </a>
                </div>
                <div className="header-btn">
                  <a href="/signup" className="btn-default">
                    Sign Up
                  </a>
                </div>
              </div>

              <div  className="navbar-toggle"></div>
            </div>
          </nav>
          <div  className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
