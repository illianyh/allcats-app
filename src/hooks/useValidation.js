import { useState, useEffect } from "react";

const useValidation = (stateInicial, validate, fn) => {
  const [values, setValues] = useState(stateInicial);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        fn(); // Fn = Function running on component
      }
      setSubmitForm(false);
    }
  }, [errors]);

  // Function running when typping
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Función que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  };

  // cuando se realiza el evento de blur
  const handleBlur = () => {
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
  };

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useValidation;
