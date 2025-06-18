import * as React from "react";
import Scrollingsticker from "./components/Scrollingsticker";
import "../assets/css/Workoutcard.css";
import img3 from '../assets/images/about-img-3.jpg'

export default function Workoutlist() {
  const workout = [
    {
      day: "04",
      month: "August",
      year: "2025",
      userId: "user_12345",
      workoutType: "Strength Training",
      durationMinutes: 45,
      caloriesBurned: 320,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          repsPerSet: [10, 8, 6],
          weightKg: [60, 70, 75],
        },
        {
          name: "Deadlift",
          sets: 3,
          repsPerSet: [8, 6, 4],
          weightKg: [80, 90, 100],
        },
        {
          name: "Pull-ups",
          sets: 3,
          repsPerSet: [8, 6, 5],
          weightKg: [0, 0, 0],
        },
      ],
      notes: "Felt strong today. Increased weight on deadlifts.",
      imageUrl:img3,
    },
    {
      day: "04",
      month: "August",
      year: "2025",
      userId: "user_12345",
      workoutType: "Strength Training",
      durationMinutes: 45,
      caloriesBurned: 320,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          repsPerSet: [10, 8, 6],
          weightKg: [60, 70, 75],
        },
        {
          name: "Deadlift",
          sets: 3,
          repsPerSet: [8, 6, 4],
          weightKg: [80, 90, 100],
        },
        {
          name: "Pull-ups",
          sets: 3,
          repsPerSet: [8, 6, 5],
          weightKg: [0, 0, 0],
        },
      ],
      notes: "Felt strong today. Increased weight on deadlifts.",
      imageUrl:
        img3, // Replace with dynamic later
    },
    {
      day: "04",
      month: "August",
      year: "2025",
      userId: "user_12345",
      workoutType: "Strength Training",
      durationMinutes: 45,
      caloriesBurned: 320,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          repsPerSet: [10, 8, 6],
          weightKg: [60, 70, 75],
        },
        {
          name: "Deadlift",
          sets: 3,
          repsPerSet: [8, 6, 4],
          weightKg: [80, 90, 100],
        },
        {
          name: "Pull-ups",
          sets: 3,
          repsPerSet: [8, 6, 5],
          weightKg: [0, 0, 0],
        },
      ],
      notes: "Felt strong today. Increased weight on deadlifts.",
      imageUrl:
        img3, // Replace with dynamic later
    },
    {
      day: "04",
      month: "August",
      year: "2025",
      userId: "user_12345",
      workoutType: "Strength Training",
      durationMinutes: 45,
      caloriesBurned: 320,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          repsPerSet: [10, 8, 6],
          weightKg: [60, 70, 75],
        },
        {
          name: "Deadlift",
          sets: 3,
          repsPerSet: [8, 6, 4],
          weightKg: [80, 90, 100],
        },
        {
          name: "Pull-ups",
          sets: 3,
          repsPerSet: [8, 6, 5],
          weightKg: [0, 0, 0],
        },
      ],
      notes: "Felt strong today. Increased weight on deadlifts.",
      imageUrl:
        img3, // Replace with dynamic later
    },
    {
      day: "04",
      month: "August",
      year: "2025",
      userId: "user_12345",
      workoutType: "Strength Training",
      durationMinutes: 45,
      caloriesBurned: 320,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          repsPerSet: [10, 8, 6],
          weightKg: [60, 70, 75],
        },
        {
          name: "Deadlift",
          sets: 3,
          repsPerSet: [8, 6, 4],
          weightKg: [80, 90, 100],
        },
        {
          name: "Pull-ups",
          sets: 3,
          repsPerSet: [8, 6, 5],
          weightKg: [0, 0, 0],
        },
      ],
      notes: "Felt strong today. Increased weight on deadlifts.",
      imageUrl:
        img3, // Replace with dynamic later
    },
  ];

  return (
    <>
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Workout <span>List</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      workouts
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scrollingsticker />

      <div className="container">
        <div className="row">
          {workout.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card">
                <div
                  className="wrapper"
                  style={{
                    background: `url(${item.imageUrl}) center / cover no-repeat`,
                  }}
                >
                  <div className="header">
                    <div className="date">
                      <span className="day" style={{ marginRight: "0.5rem" }}>
                        {item.day}
                      </span>
                      <span className="month" style={{ marginRight: "0.5rem" }}>
                        {item.month}
                      </span>
                      <span className="year" style={{ marginRight: "0.5rem" }}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <div className="data">
                    <div className="content">
                      <span className="author">Jane Doe</span>
                      <h1 className="title">
                        <a href="#">{item.workoutType}</a>
                      </h1>
                      <p className="text">{item.notes}</p>
                      <a href="/workout-details" className="button">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
