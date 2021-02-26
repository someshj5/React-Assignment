import React from "react";
import Input from "./Input";

export default function Login() {
  return (
    <div className="container border mt-5">
      <div className="fs-24 fc-red ff-montserrat my-5 fw-500">
        <h2>Login</h2>
      </div>
      <Input name="email" />
    </div>
  );
}
