import React from "react";
import * as Yup from "yup";
import FilledButton from "./FilledButton";
import { useHistory } from "react-router-dom";

import { AppForm, AppFormField } from "./Forms";

const Input = ({ ...props }) => {
  let history = useHistory();

  const loginFormValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().required().email("Invalid email format").label("Email"),
    password: Yup.string()
      .required("Password is Required")
      .min(6)
      .label("Password"),
  });

  const onSubmitLogin = (values) => {
    if (values.email === "admin@xyz.com" && values.password === "Admin_007") {
      localStorage.setItem("login", "admin");
      history.push("/admin");
    }
  };
  return (
    <AppForm
      className="container"
      validationSchema={loginSchema}
      initialValues={loginFormValues}
      onSubmit={(e) => onSubmitLogin(e)}
    >
      <div>
        <AppFormField id="email" placeholder="Email" name="email" />
      </div>
      <div className=" mt-3">
        <AppFormField id="password" name="password" placeholder="Password" />
      </div>
      <div className="my-4">
        <FilledButton title={"Login"} />
      </div>
    </AppForm>
  );
};

export default Input;
