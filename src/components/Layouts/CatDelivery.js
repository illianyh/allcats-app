import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, Field, InputSubmit, Error, Select } from "../Form";
import validateAdoption from "../../validation/validateAdoption";
import useValidation from "../../hooks/useValidation";
import axios from "axios";

const initialState = {
  name: "",
  lastname: "",
  email: "",
};

const CatDelivery = () => {
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");
  const [cities, setCities] = useState([]);
  useEffect(() => {
    if (cities.length === 0) {
      const getCities = async () => {
        try {
          const result = await axios.get(
            "https://city-api.herokuapp.com/?country=united%20kingdom"
          );
          setCities(result.data.cities);
        } catch (error) {}
      };
      getCities();
    }
    console.log(cities);
  });

  const setDelivery = () => {
    console.log(name, lastname, email, phone);
  };
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(initialState, validateAdoption, setDelivery);

  const { name, lastname, email } = values;

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} noValidate>
        <h2 className="heading"> Cat delivery</h2>
        <p>We need to know more about you so you can take a cat:</p>

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
            <PhoneInput country={"gb"} value={phone} onChange={setPhone} />
          </Field>
          {errors.phone && <Error>{errors.phone}</Error>}
        </fieldset>

        {error && <Error>{error} </Error>}

        <InputSubmit type="submit" value="APPLY FOR DELIVERY" />
      </Form>
    </div>
  );
};

export default CatDelivery;
