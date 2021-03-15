import React, { createRef, useState } from "react";

const TargetNew = ({ targets, addTarget }) => {
  const [inputContent, setInputContent] = useState("");

  let inputRef = createRef();

  const onInputChange = (e) => {
    setInputContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && inputContent !== "") {
      if (isTargetAlreadyExisting()) {
        console.log("Target Already existing");
      } else {
        addTarget(inputContent);
        inputRef.current.value = "";
        setInputContent("");
      }
    }
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  const isTargetAlreadyExisting = () => {
    for (let i = 0; i < targets.segments.length; i++) {
      if (
        targets.segments[i].value.toLowerCase() === inputContent.toLowerCase()
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={"controller controller--targetNew"} onClick={focusInput}>
      <input
        type="test"
        placeholder="Add Target"
        onChange={onInputChange}
        onKeyDown={(e) => onKeyDown(e)}
        ref={inputRef}
        size="10"
      />
    </div>
  );
};

export default TargetNew;
