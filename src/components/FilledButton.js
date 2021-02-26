import React from "react";
import { useFormikContext } from "formik";

const FilledButton = ({ title, onPress }) => {
  const { submitForm } = useFormikContext();
  return (
    <div onClick={submitForm}>
      <button type="submit" className="btn">
        {title.toUpperCase()}
      </button>
    </div>
  );
};

export default FilledButton;
