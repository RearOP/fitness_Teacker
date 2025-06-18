import React, { useState } from "react";
import "../assets/css/Profile.css";
import Scrollingsticker from "./components/Scrollingsticker";
const Profile = () => {
  // State management
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [showName, setShowName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [activeTab, setActiveTab] = useState("Recipes");
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=300&fit=crop"
  );
  const [profilePic, setProfilePic] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  );
  const [showModal, setShowModal] = useState({ show: false, image: "" });

  const tabs = ["Recipes", "Favorites", "Collections", "Following"];

  // Sample recipe data
  const recipes = [
    {
      id: 1,
      title: "Delicious Pasta",
      description:
        "A mouth-watering pasta dish with fresh ingredients and aromatic herbs.",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Gourmet Pizza",
      description:
        "Crispy crust topped with premium ingredients and melted cheese.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Fresh Salad",
      description:
        "A healthy mix of greens, vegetables, and a light vinaigrette dressing.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Spicy Burger",
      description:
        "Juicy beef patty with spicy sauce and fresh toppings on a toasted bun.",
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=200&fit=crop",
    },
  ];
  // Handlers
  const handleNameSubmit = () => {
    if (name.trim() === "") {
      setNameError("Name cannot be empty");
      return;
    }
    setNameError("");
    setShowName(false);
    console.log("Name saved:", name);
  };

  const handleEmailSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setShowEmail(false);
    console.log("Email saved:", email);
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (type === "cover") {
          setCoverImage(event.target.result);
        } else if (type === "profile") {
          setProfilePic(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const CameraIcon = () => (
    <svg
      style={{ width: "20px", height: "20px", color: "#6b7280" }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0017.07 7H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
    </svg>
  );

  const EditIcon = () => (
    <svg
      style={{
        width: "16px",
        height: "16px",
        cursor: "pointer",
        color: "#6b7280",
      }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      ></path>
    </svg>
  );
  return (
    <>
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  profile
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scrollingsticker />
      <div className="profile-container">
        <div className="max-width">
          {/* Cover Image */}
          <div className="cover-section">
            <img
              src={coverImage}
              alt="Cover"
              className="cover-image"
              onClick={() => setShowModal({ show: true, image: coverImage })}
            />
            <label className="camera-btn">
              <CameraIcon />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "cover")}
                className="hidden"
              />
            </label>

            {/* Profile Picture */}
            <div className="profile-section">
              <div className="profile-pic-container">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="profile-pic"
                  onClick={() =>
                    setShowModal({ show: true, image: profilePic })
                  }
                />
                <label className="camera-btn">
                  <CameraIcon />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "profile")}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="profile-info">
                {/* Name Field */}
                <div className="input-section">
                  <div className="input-section">
                    <input
                      className={showName ? "name-input-editing" : "name-input"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!showName}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleNameSubmit();
                        }
                      }}
                    />
                    {showName && (
                      <button onClick={handleNameSubmit} className="save-btn">
                        Save
                      </button>
                    )}
                  </div>
                  {!showName && (
                    <div onClick={() => setShowName(true)}>
                      <EditIcon />
                    </div>
                  )}
                </div>
                {nameError && <div className="error-message">{nameError}</div>}

                {/* Email Field */}
                <div className="input-section">
                  <div className="input-section">
                    <input
                      className={
                        showEmail ? "email-input-editing" : "email-input"
                      }
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!showEmail}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleEmailSubmit();
                        }
                      }}
                    />
                    {showEmail && (
                      <button onClick={handleEmailSubmit} className="save-btn">
                        Save
                      </button>
                    )}
                  </div>
                  {!showEmail && (
                    <div onClick={() => setShowEmail(true)}>
                      <EditIcon />
                    </div>
                  )}
                </div>
                {emailError && (
                  <div className="error-message">{emailError}</div>
                )}
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal.show && (
            <div
              className="modal"
              onClick={() => setShowModal({ show: false, image: "" })}
            >
              <div style={{ position: "relative" }}>
                <button
                  className="modal-close"
                  onClick={() => setShowModal({ show: false, image: "" })}
                >
                  ×
                </button>
                <img
                  src={showModal.image}
                  alt="Modal"
                  className="modal-image"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={
                  activeTab === tab ? "tab-button-active" : "tab-button"
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Recipes Grid */}
          {/* <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
              <div className="recipe-content">
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-description">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
