import React from "react";
import { gql, useMutation } from "@apollo/client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import logo from "../styles/assets/logo.png";

const SIGNUP_MUTATION = gql`
  mutation signup($name: String, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

interface SignupValues {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

const Signup = () => {
  const history = useHistory();
  const [signup, { data }] = useMutation(SIGNUP_MUTATION);
  const initialValues: SignupValues = {
    email: "",
    name: "",
    password: "",
    confirmedPassword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name Required"),
    password: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Password Required"),
    confirmedPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });
  return (
    <div className="container" style={{ marginTop: "15rem" }}>
      <img src={logo} alt="logo" className="logo" style={{ width: "5rem" }} />
      <h3>Sign up to Fake Twitter</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const response = await signup({
            variables: values,
          });
          localStorage.setItem("token", response.data.signup.token);
          setSubmitting(false);
          history.push("/users");
        }}
      >
        <Form>
          <Field name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email" component={"div"} />
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage name="name" component={"div"} />
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component={"div"} />
          <Field
            name="confirmedPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <ErrorMessage name="confirmedPassword" component={"div"} />
          <button type="submit" className="login-button">
            <span>Sign up</span>
          </button>
        </Form>
      </Formik>
      <div className="register container">
        <h4>Already have an account?</h4>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
