import React from "react";

export default function Props(props) {
  return (
    <>
      <div className={props.classO}>
        <img src={props.img} className={props.classT} alt="images" />
        <div className={props.classTh}>
          <div className={props.classF}>
            <h4 className="order__body-title">{props.title}</h4>
            <p className="order__body-text">{props.text}</p>

            <button className="order__body-btn btn">{props.btnText}</button>
          </div>
        </div>
      </div>
    </>
  );
}
