import React, { useState, useEffect, useRef, Fragment } from "react";

const Pagination = ({
  items,
  onChangePage,
  initialPage,
  pageSize,
  pageNeighbours,
  labelPrevious,
  labelNext,
}) => {
  const [pagination, setPagination] = useState({});

  /**
   * Calc the ranges of numbers for the pagination
   * @param {number} total
   * @param {number} current
   * @param {number} neighbours
   * @returns {{startPage, endPage}}
   */
  const setLimitPagination = (total, current, neighbours) => {
    let startPage;
    let endPage;
    const paginationNbItems = neighbours * 2 + 1;
    if (total <= paginationNbItems) {
      startPage = 1;
      endPage = total;
    }
    if (total > paginationNbItems) {
      if (current <= neighbours + 1) {
        startPage = 1;
        endPage = paginationNbItems;
      } else if (current + neighbours >= total) {
        startPage = total - neighbours * 2;
        endPage = total;
      } else {
        startPage = current - neighbours;
        endPage = current + neighbours;
      }
    }
    return { startPage, endPage };
  };

  /**
   * Build all the pagination data
   * @param {number} totalItems
   * @param {number} currentPage
   * @param {number} itemsPerPage
   * @returns {object} all pagination properties required by the view
   */
  const getPagination = (totalItems, currentPage, itemsPerPage) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const { endPage, startPage } = setLimitPagination(
      totalPages,
      currentPage,
      pageNeighbours
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
    const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => ({
      number: startPage + i,
      id: startPage + i,
    }));

    return {
      totalItems,
      currentPage,
      itemsPerPage,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  };

  /**
   * Set new pagination object for specified page
   * @param {number} page
   */
  const setPage = (page) => {
    const totalPages = Math.ceil(items.length / pageSize);
    if (page < 1 || (totalPages !== 0 && page > totalPages)) return;
    const paginationData = getPagination(items.length, page, pageSize);
    const pageOfItems = items.slice(
      paginationData.startIndex,
      paginationData.endIndex + 1
    );
    setPagination(paginationData);
    onChangePage(pageOfItems, paginationData.currentPage);
  };

  // watch if new items array were injected in the pagination
  const ref = useRef();
  useEffect(() => {
    if (ref.current !== items) setPage(initialPage);
    ref.current = items;
  }, [items]);

  // watch if the props pageSize change
  // useful with filters
  const refSize = useRef();
  useEffect(() => {
    if (refSize.current !== pageSize && pagination.currentPage) {
      const totalPages = Math.ceil(items.length / pageSize);
      pagination.currentPage > totalPages
        ? setPage(totalPages)
        : setPage(pagination.currentPage);
    }
    refSize.current = pageSize;
  }, [pageSize]);

  return (
    <Fragment>
      {pagination.pages && pagination.pages.length > 1 && (
        <ul className="pagination">
          <li
            className={
              pagination.currentPage === 1 ? "previous disabled" : "previous"
            }
            onClick={() => setPage(pagination.currentPage - 1)}
          >
            {labelPrevious}
          </li>
          {pagination.pages.map((page) => (
            <li
              key={page.id}
              className={
                pagination.currentPage === page.number
                  ? "number active"
                  : "number"
              }
              onClick={() => setPage(page.number)}
            >
              {page.number}
            </li>
          ))}
          <li
            className={
              pagination.currentPage === pagination.totalPages
                ? "next disabled"
                : "next"
            }
            onClick={() => setPage(pagination.currentPage + 1)}
          >
            {labelNext}
          </li>
        </ul>
      )}
    </Fragment>
  );
};

export default Pagination;
