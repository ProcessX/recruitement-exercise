import React from "react";

const Searchbar = ({ searchName }) => {
  var searchTimer;
  const searchDelay = 500;

  const onChange = (e) => {
    console.log(e.target.value);
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => searchName(e.target.value), searchDelay);
  };

  return (
    <div className={"searchbar"}>
      <input type="test" placeholder="Search" onChange={onChange} />
    </div>
  );
};

export default Searchbar;
