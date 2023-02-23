import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
const AlertErrors = () => {
  const errors = useSelector((state) =>state.ErrorReducers);

  return (
    <div>
      {errors.map((el) => (
        <Alert key={el.id} variant="danger">
          {el.msg}
        </Alert>
      ))}
    </div>
  );
};

export default AlertErrors;
