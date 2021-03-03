import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return <div className="form-message invalid"><text style={{color: "red"}}>{message}</text></div>;
  }
  return <div className="form-message valid"><text style={{color: "green"}}>All good</text></div>;
};

export default Error;