import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Scrollingsticker from "./components/Scrollingsticker";

const NutritionLog = () => {
  const initialValues = {
    mealType: "",
    items: [""],
    notes: "",
  };

  const validationSchema = Yup.object({
    mealType: Yup.string().required("Meal type is required"),
    items: Yup.array().of(Yup.string().required("Item is required")),
    notes: Yup.string().nullable(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post("/api/nutrition", values, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log("Nutrition log saved:", res.data);
      resetForm();
    } catch (err) {
      console.error("Failed to save nutrition log", err.response.data);
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
                  Nutrition <span>Log</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Nutrition
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scrollingsticker />
      <div className="container mt-5">
        <h2>Add Nutrition Log</h2>
        <div className="contact-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="wow fadeInUp" data-wow-delay="0.4s">
                <div className="form-group mb-3">
                  <Field
                    name="mealType"
                    className="form-control"
                    placeholder="Meal Type (e.g., breakfast)"
                  />
                  <ErrorMessage
                    name="mealType"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {values.items.map((item, index) => (
                  <div className="form-group mb-3" key={index}>
                    <Field
                      name={`items[${index}]`}
                      className="form-control"
                      placeholder={`Item ${index + 1}`}
                    />
                    <ErrorMessage
                      name={`items[${index}]`}
                      component="div"
                      className="text-danger"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="btn-default mb-3"
                  onClick={() => setFieldValue("items", [...values.items, ""])}
                >
                  Add Item
                </button>

                <div className="form-group mb-3">
                  <Field
                    as="textarea"
                    name="notes"
                    className="form-control"
                    placeholder="Additional notes (optional)"
                  />
                </div>

                <button type="submit" className="btn-default">
                  Save Log
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default NutritionLog;
