import { useState } from "react";

const FormState = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (event) => {
    // ... opens up an object
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return { handleInputChange, inputs };
};

export default FormState;
