import React, { createRef } from "react";

const Searchbar = ({ searchName }) => {
  const searchDelay = 500;
  var searchTimer;
  let inputRef = createRef();

  const onChange = (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => searchName(e.target.value), searchDelay);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={"controller controller--searchbar"}
      onClick={() => focusInput()}
    >
      <input
        type="test"
        placeholder="Search"
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};

export default Searchbar;
