import React from "react";
// import Error from "../Error";
import { useFormikContext } from "formik";
import Error from "../Error";

const AppFormField = ({ style, name, className, ...props }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <input
        {...props}
        type={name}
        className={className}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name)}
      />
      <Error error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
