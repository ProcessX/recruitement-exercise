import React from "react";

const PageNav = ({ pageIndex, changePage, maxPageIndex }) => {
  const disableBtnNext = () => {
    if (pageIndex === maxPageIndex) return true;
    else return false;
  };

  const disableBtnPrev = () => {
    if (pageIndex === 1) return true;
    else return false;
  };

  const changePageIndex = (newIndex) => {
    if (newIndex > 0 && newIndex <= maxPageIndex) changePage(newIndex);
  };

  return (
    <div className={"controller controller--pageNav"}>
      <button
        className={`btn btn--pageNav btn--pageNav--prev ${
          disableBtnPrev() ? " btn--pageNav--prev--disabled" : ""
        }`}
        onClick={() => changePageIndex(parseInt(pageIndex) - 1)}
      >
        Previous
      </button>
      <p className={"pageNav__indicator"}>Page {pageIndex}</p>
      <button
        className={`btn btn--pageNav btn--pageNav--next ${
          disableBtnNext() ? " btn--pageNav--next--disabled" : ""
        }`}
        onClick={() => changePageIndex(parseInt(pageIndex) + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PageNav;
