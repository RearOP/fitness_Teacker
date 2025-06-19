// FRONTEND: AddWorkout.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Scrollingsticker from "./components/Scrollingsticker";

const initialValues = {
  workoutName: "",
  category: "",
  exercises: [
    {
      name: "",
      sets: "",
      reps: "",
      weight: "",
      notes: "",
    },
  ],
};

const validationSchema = Yup.object({
  workoutName: Yup.string().required("Workout name is required"),
  category: Yup.string().required("Category is required"),
  exercises: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Exercise name is required"),
      sets: Yup.number().required("Sets are required"),
      reps: Yup.number().required("Reps are required"),
      weight: Yup.number().nullable(),
      notes: Yup.string().nullable(),
    })
  ),
});

const AddWorkout = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post("/api/workouts", values, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log("Workout saved:", res.data);
      resetForm();
    } catch (err) {
      console.error("Failed to save workout", err.response.data);
    }
  };

  return (
    <>
    <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Add <span>Workout</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add Workout
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scrollingsticker />
      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="contact-us-content">
                <div className="section-title">
                  <div className="section-bg-title">
                    <span>Add / Edit Workout</span>
                  </div>
                  <h2 className="text-anime-style-2">
                    Manage your <span>Workout</span>
                  </h2>
                </div>
                <div className="contact-form">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, setFieldValue }) => (
                      <Form>
                        <div className="form-group mb-4">
                          <Field
                            type="text"
                            name="workoutName"
                            className="form-control"
                            placeholder="Workout Name"
                          />
                          <ErrorMessage
                            name="workoutName"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        <div className="form-group mb-4">
                          <Field
                            type="text"
                            name="category"
                            className="form-control"
                            placeholder="Category"
                          />
                          <ErrorMessage
                            name="category"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {values.exercises.map((exercise, index) => (
                          <div key={index} className="mb-4 border p-3">
                            <Field
                              name={`exercises[${index}].name`}
                              className="form-control mb-2"
                              placeholder="Exercise Name"
                            />
                            <Field
                              name={`exercises[${index}].sets`}
                              type="number"
                              className="form-control mb-2"
                              placeholder="Sets"
                            />
                            <Field
                              name={`exercises[${index}].reps`}
                              type="number"
                              className="form-control mb-2"
                              placeholder="Reps"
                            />
                            <Field
                              name={`exercises[${index}].weight`}
                              type="number"
                              className="form-control mb-2"
                              placeholder="Weight (kg)"
                            />
                            <Field
                              name={`exercises[${index}].notes`}
                              className="form-control mb-2"
                              placeholder="Notes"
                            />
                          </div>
                        ))}

                        <div className="mb-4">
                          <button
                            type="button"
                            className="btn-default btn-highlighted"
                            onClick={() =>
                              setFieldValue("exercises", [
                                ...values.exercises,
                                {
                                  name: "",
                                  sets: "",
                                  reps: "",
                                  weight: "",
                                  notes: "",
                                },
                              ])
                            }
                          >
                            Save
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWorkout;
