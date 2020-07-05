import styled from "styled-components";

export const Form = styled.form`
  padding: 2rem;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
  background-color: var(--white);
  border-radius: $radius;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  fieldset {
    margin: 1rem 0;
    border: 1px solid #e1e1e1;
    font-size: 2rem;
    padding: 2rem;
  }
`;

export const Field = styled.div`
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    touch-action: manipulation;
    align-self: center;
  }

  input,
  textarea {
    display: block;
    padding: 0.5rem 0.75rem;
    width: 100%;
    font-size: 1rem;
    line-height: 1.25;
    color: #55595c;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #eee;
    border-left: 0;

    &:focus {
      outline: none;
      border-bottom-color: var(--primary);
    }
  }
  textarea {
    resize: vertical;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    label {
      margin-right: 0.5rem;
    }
  }
`;

export const InputSubmit = styled.input`
  background-color: var(--primary);
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: center;
  color: var(--white);
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  -webkit-transition: background-color 0.1s linear;
  -ms-transition: background-color 0.1s linear;
  transition: background-color 0.1s linear;

  &:hover {
    cursor: pointer;
    transform: translateY(1) scale(1);
    background: var(--secondary);
  }
`;

export const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: 1 solid #eee;
  background: var(--white);
`;

export const Error = styled.p`
  background-color: red;
  padding: 1rem;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--white);
  text-align: center;
  text-transform: uppercase;
`;
