import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    // handle API call here
  };

  return (
    <>
      

      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="contact-us-content">
                <div className="section-title">
                  <div className="section-bg-title wow fadeInUp">
                    <span>sign up</span>
                  </div>
                  <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                    sign up
                  </h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Join our
                    <span> community today</span>
                  </h2>
                </div>
                <div className="contact-form">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {() => (
                      <Form className="wow fadeInUp" data-wow-delay="0.4s">
                        <div className="row">
                          <div className="form-group col-md-6 mb-4">
                            <Field
                              type="text"
                              name="fname"
                              className="form-control"
                              placeholder="First name"
                            />
                            <ErrorMessage
                              name="fname"
                              component="div"
                              className="text-danger"
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            />
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <Field
                              type="text"
                              name="lname"
                              className="form-control"
                              placeholder="Last name"
                            />
                            <ErrorMessage
                              name="lname"
                              component="div"
                              className="text-danger"
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            />
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <Field
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-danger"
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            />
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <Field
                              type="text"
                              name="phone"
                              className="form-control"
                              placeholder="Phone No."
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="text-danger"
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            />
                          </div>

                          <div className="form-group col-md-12 mb-5">
                            <Field
                              as="textarea"
                              name="message"
                              className="form-control"
                              rows="4"
                              placeholder="Message"
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="text-danger"
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            />
                          </div>

                          <div className="col-md-12">
                            <button type="submit" className="btn-default">
                              Submit
                            </button>
                          </div>
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

export default Signup;
