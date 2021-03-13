import React from "react";
import { useHistory } from "react-router-dom";

const BtnBack = () => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return <button onClick={goBack}>Back</button>;
};

export default BtnBack;
