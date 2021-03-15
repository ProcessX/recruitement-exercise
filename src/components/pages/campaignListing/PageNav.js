import React from "react";

const PageNav = ({ pageIndex, changePage }) => {
  return (
    <div className={"controller controller--pageNav"}>
      <button
        className={"btn btn--pageNav btn--pageNav--prev"}
        onClick={() => changePage(parseInt(pageIndex) - 1)}
      >
        Previous
      </button>
      <p className={"pageNav__indicator"}>Page {pageIndex}</p>
      <button
        className={"btn btn--pageNav btn--pageNav--next"}
        onClick={() => changePage(parseInt(pageIndex) + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PageNav;
