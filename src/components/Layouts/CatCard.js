import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const TakeHomeBtn = styled.button`
  padding: 0.75rem 1rem;
  margin: 0 0.5rem;

  color: var(--white);
  font-size: 1rem;
  color: var(--white);
  background-color: var(--primary);
  border: none;
  box-shadow: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  -webkit-transition: background-color 0.35s linear;
  -ms-transition: background-color 0.35s linear;
  transition: background-color 0.35s linear;

  &:hover {
    background: var(--secondary);
  }
`;

const CatContainer = styled.li`
  display: flex;
  padding: 0.5em;
  width: 50%;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media all and (min-width: 768px) {
    width: 33.33%;
  }

  @media all and (min-width: 1440px) {
    width: 25%;
  }
`;

const CatContent = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  width: 100%;
  justify-content: space-between;

  h3 {
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }
  p {
    flex: 1 0 auto;
    padding: 0 0.5rem;
  }
`;

const CatCard = ({ cat, props }) => {
  const { id, name, image, description } = cat;
  const h = useHistory();

  const takeCat = (id) => {
    h.push(`/cat?id=${id}`);
  };
  return (
    <CatContainer>
      <CatContent>
        <div>
          <img src={image} alt="cat" />
          {/* <div className="topleft"> <img src='/Allcats_badge.svg' alt="cat" />Best</div> HERE FOR THE TAGS*/}
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <TakeHomeBtn onClick={() => takeCat(id)}>Take home</TakeHomeBtn>
      </CatContent>
    </CatContainer>
  );
};

export default CatCard;
