import React, { useState } from "react";
import { Form, Field, InputSubmit, Error } from "../Form";

// validation
import useValidation from "../../hooks/useValidation";
import validateVisit from "../../validation/validateVisit";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  date: "",
};

const BookVisit = () => {
  const [error, setError] = useState(false);
  const setVisit = () => {
    console.log(name, lastname, email, date);
  };
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(initialState, validateVisit, setVisit);

  const { name, lastname, email, date } = values;

  return (
    <div className="container">
      {error}
      <Form onSubmit={handleSubmit} noValidate>
        <h2 className="heading">Book a visit</h2>
        <p> We need this information to book your visit:</p>

        <fieldset>
          <Field>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.name && <Error>{errors.name}</Error>}

          <Field>
            <input
              type="text"
              id="lastname"
              placeholder="Your Lastname"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>
          {errors.lastname && <Error>{errors.lastname}</Error>}

          <Field>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.email && <Error>{errors.email}</Error>}

          <Field>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              value={date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.date && <Error>{errors.date}</Error>}
        </fieldset>

        {error && <Error>{error} </Error>}

        <InputSubmit type="submit" value="Book visit" />
      </Form>
    </div>
  );
};

export default BookVisit;
