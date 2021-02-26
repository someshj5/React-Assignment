import React from "react";

const Error = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  }
  return <div>{error}</div>;
};

export default Error;
