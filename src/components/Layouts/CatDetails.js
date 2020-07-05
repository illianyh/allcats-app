import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Error } from "../Form";
import Loader from "../Loader";
import { ReactComponent as Paw } from "../../assets/paw.svg";
import { ReactComponent as BreedLogo } from "../../assets/breed.svg";
import { ReactComponent as GenderLogo } from "../../assets/gender.svg";

const Layout = styled.div`
  padding-top: 2rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const CatImageWrapper = styled.div`
  flex: 1;
  padding: 0 1.125rem;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
const CatInfoWrapper = styled.div`
  flex: 1;
  padding: 0 1.125rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    padding-top: 1rem;
  }

  @media (min-width: 640px) {
    h2 {
      padding-top: 0;
    }
  }
`;

const CatProfile = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 1rem;
`;

const ProfileDetail = styled.div`
  text-align: center;
  h2 {
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.175rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
  svg {
    width: 56px;
    height: 56px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  flex-direction: column;

  a:first-child {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: unset;
    a:first-child {
      margin-bottom: 0;
    }
  }
`;

const Button = styled(Link)`
  padding: 15px 25px;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  -webkit-transition: background-color 0.35s linear;
  -ms-transition: background-color 0.35s linear;
  transition: background-color 0.35s linear;

  &.visit {
    background-color: #4a477d;
    transition: all 0.35s ease;
    &:hover {
      background-color: #4a477deb;
    }
  }

  &.donate {
    background-color: #944166;
    transition: all 0.35s ease;

    &:hover {
      background-color: #944166eb;
    }
  }
  &.home {
    background-color: var(--primary);
    transition: all 0.35s ease;
    margin-bottom: 5rem;
    width: 100%;

    &:hover {
      background-color: var(--secondary);
    }
  }
`;

const CatDetails = (props) => {
  //get id from routing
  const search = props.location.search;
  const params = new URLSearchParams(search); // this doesn't work on internet explorer
  const id = params.get("id");

  // hook for history
  const h = useHistory();

  // component state
  const [cat, setCat] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // get cat info
  useEffect(() => {
    if (id) {
      const getCat = async () => {
        // set loading true
        setLoading(true);
        setError(false);
        try {
          const result = await axios.get(
            `https://5e5932cd7777050014463360.mockapi.io/cats/${id}`
          );
          setCat(result.data);
        } catch (error) {
          setError(true);
        }
        // After API operation end
        setLoading(false);
      };
      getCat();
    }
  }, [id]);

  // check cat is available
  if (Object.keys(cat).length === 0 && !error)
    return (
      <div className="imgContainer">
        <Loader />
      </div>
    );

  if (error)
    return (
      <>
        <Error>AN ERROR OCCURRED</Error>
        <div className="content">
          <button className="btn" onClick={() => h.push("/")}>
            <Paw />
          </button>
        </div>
      </>
    );
  const { name, image, description } = cat;

  return (
    <div className="container">
      <Layout>
        <CatImageWrapper>
          <img src={image} alt="cat" />
          {/* <div className="topleft"> <img src='/Allcats_badge.svg' alt="cat" />Best</div> HERE FOR THE TAGS*/}
        </CatImageWrapper>
        <CatInfoWrapper>
          <h2>Hello, I'm {name}</h2>
          <p>{description}</p>
          <CatProfile>
            <ProfileDetail>
              <BreedLogo />
              <h2>Breed</h2>
              <p>Turkish Van</p>
            </ProfileDetail>
            <ProfileDetail>
              <GenderLogo />
              <h2>Gender</h2>
              <p>Male</p>
            </ProfileDetail>
          </CatProfile>
          <ButtonWrapper>
            <Button className="visit" to="/book-visit">
              Come and meet me!
            </Button>
            <Button className="donate" to="/donate">
              Donate
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button className="home" to="/">
              Go back
            </Button>
          </ButtonWrapper>
        </CatInfoWrapper>
      </Layout>
    </div>
  );
};
export default CatDetails;
