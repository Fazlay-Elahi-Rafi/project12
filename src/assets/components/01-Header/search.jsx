import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [state, setState] = useState(false);
  const [input, setInput] = useState("");
  
  const bgShowFun = () => {
    setState(true);
    document.body.className = "overflow";
  };
  const bgHideFun = () => {
    document.body.className = "overflowshow";
    setState(false);
    setInput("");
  };
  const inputFun = (e) => {
    setInput(e.target.value);
    e.preventDefault();
  };
  return (
    <>
      <FaSearch className="search__icon" onClick={bgShowFun} />

      <div
        className={`${state ? "bghide bgshow" : "bgshow"}`}
        onClick={bgHideFun}
      ></div>
      <div
        className={`col-11 col-sm-9 col-lg-6 ${
          state ? "inputhide inputshow" : "inputshow"
        }`}
      >
        <div className="col-12">
          <input
            className="form-control search__input"
            type="text"
            placeholder="Search..."
            value={input}
            onChange={inputFun}
          />
        </div>
      </div>
    </>
  );
}
