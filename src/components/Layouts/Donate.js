import React from "react";
import { Form, Field, InputSubmit, Select } from "../Form";
import styled from "styled-components";

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  margin-left: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  }
`;
const Donate = () => {
  return (
    <div className="container">
      <Form
        // onSubmit={handleSubmit}
        noValidate
      >
        <h2> Why do we need your donation?</h2>
        <div className="header">
          <p>
            To find lifelong, loving homes for all cats by supporting programs
            and thought leadership that bring people and pets together.
          </p>
        </div>
        <fieldset>
          <Field>
            <label>I would like to do a </label>
            <Select>
              <option name="monthly" value="monthly">
                Monthly Donation
              </option>
              <option name="offset">One-Off Donation</option>
            </Select>
          </Field>
          <Field>
            <label>of £ </label>
            <Input type="number" name="donation" />
          </Field>
          <InputSubmit type="submit" value="DONATE" />
        </fieldset>
      </Form>
    </div>
  );
};

export default Donate;
