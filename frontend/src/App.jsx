import { useState } from "react";
import Header from "./main/components/Header";
import Footer from "./main/components/Footer";
import IndexPage from "./main/IndexPage";
import Loader from "./main/components/Loader";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./main/Aboutus";
import Services from "./main/Services";
import Contactus from "./main/Contactus";
import Profile from "./main/Profile";
import Error from "./main/Error";
import SignIn from "./main/SignIn";
import Signup from "./main/Signup";
import Workoutlist from "./main/Workoutlist";
import WorkoutDetails from "./main/WorkoutDetails";
import AddWorkout from "./main/AddWorkout";
import EditWorkout from "./main/EditWorkout";

function App() {
  return (
    <>
      {/* <Loader /> */}
      <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workoutlist" element={<Workoutlist />} />
          <Route path="/workout-details" element={<WorkoutDetails />} />
          <Route path="/add-workout" element={<AddWorkout />} />
          <Route path="/edit-workout" element={<EditWorkout />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      <Footer />
    </>
  );
}

export default App;
