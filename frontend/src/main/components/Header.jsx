import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  const navigate = useNavigate();
  const [Admin, setAdmin] = useState(false);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  let API_URL = "http://localhost:3000/";

  async function checkauth() {
    try {
      const res = await axios.get(`${API_URL}check`, {
        withCredentials: true,
      });
      setIsLoggedIn(res.data.loggedIn);
      // console.log(IsLoggedIn);
      setAdmin(res.data.role === "admin");
      // console.log(res.data.role);
    } catch (err) {
      console.error("Auth check failed:", err.message);
    }
  }

  useEffect(() => {
    checkauth();
  });

  const logout = async () => {
    try {
      const log = await axios.get(`${API_URL}auth/logout`, {
        withCredentials: true,
      });
      if (log.status === 200) {
        navigate("/index");
      }
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="images/logo.svg" alt="Logo" />
            </a>
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services">
                      Services
                    </a>
                  </li>

                  {/* User Pages */}
                  {!Admin ? (
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        More
                      </a>
                      <ul>
                        <li>
                          <a className="nav-link" href="/profile">
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/dashboard">
                            User Dashboard
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/workouts">
                            Workouts
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/nutrition">
                            Nutrition Logs
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/progress">
                            Progress / Analytics
                          </a>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    /* Admin Pages */
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Admin
                      </a>
                      <ul>
                        <li>
                          <a className="nav-link" href="/admin/dashboard">
                            Admin Dashboard
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/admin/workouts">
                            Manage Workouts
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/admin/logs">
                            View Logs
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/admin/analytics">
                            Analytics View
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/admin/users">
                            User Directory
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/admin/moderation">
                            Moderation Panel
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/admin/inbox">
                            Inbox
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {!IsLoggedIn ? (
                <>
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
                </>
              ) : (
                <>
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/notifications">
                        <IoMdNotificationsOutline style={{width: "1.5rem",height: "1.5rem"}} />
                      </a>
                    </li>
                  </ul>
                  <div className="header-btn">
                    <button
                      onClick={() => logout()}
                      className="btn-default btn-highlighted"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
