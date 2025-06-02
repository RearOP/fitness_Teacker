import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Login:", values);
    // handle login API
  };

  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="contact-us-content">
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>sign in</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  sign in
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Track your
                  <span> progress now</span>
                </h2>
              </div>
              <div className="contact-form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="wow fadeInUp" data-wow-delay="0.4s">
                    <div className="row">
                      <div className="form-group col-md-12 mb-4">
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          autoComplete="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                          style={{ fontSize: "15px", fontWeight: "bold" }}
                        />
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                          style={{ fontSize: "15px", fontWeight: "bold" }}
                        />
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="btn-default">
                          Login
                        </button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
