import React, { useState } from "react";
import CatCard from "./CatCard";
import Loader from "../Loader";
import Pagination from "../Pagination";
import {
  NUMBER_ITEM_PAGINATION,
  OFFSET_PAGINATION,
} from "../../utils/constants";
import useCats from "../../hooks/useCats";
import styled from "styled-components";

const CatsContainer = styled.div`
  padding-top: 2rem;

  &.header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const Header = styled.h1`
  font-weight: 500;
`;

const Error = styled.div`
  color: red;
`;
const CatList = () => {
  // state pages
  const [pageOfItems, setPageOfitems] = useState([]);
  const [pageActive, setPageActive] = useState([]);

  const handlePageChange = (itemsPage, activePage) => {
    setPageOfitems(itemsPage);
    setPageActive(activePage);
  };

  // importing from hook
  const { cats, error, loading } = useCats();

  return (
    <CatsContainer>
      <div className="container">
        <Header>Choose Cats</Header>
        {loading && <Loader />}
        <ListContainer>
          {pageOfItems.map((item) => (
            <CatCard key={item.id} cat={item} />
          ))}
        </ListContainer>
        {error && <Error>Something went wrong</Error>}
        <Pagination
          initialPage={1}
          labelPrevious={"Previous"}
          labelNext={"Next"}
          items={cats}
          pageNeighbours={OFFSET_PAGINATION}
          pageSize={NUMBER_ITEM_PAGINATION}
          onChangePage={handlePageChange}
        />
      </div>
    </CatsContainer>
  );
};

export default CatList;
