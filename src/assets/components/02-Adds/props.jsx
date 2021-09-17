import React from "react";

export default function Props(props) {
  return (
    <>
      <div className={props.Class}>
        <div className="adds__card-img">
          <img src={props.img} className="img-fluid" alt="image" />
        </div>
        <div className={props.ClassT}>
          <div className="">
            <span className="adds__card-num">{props.num}</span>

            <span className="adds__card-text">{props.text}</span>

            <span className="adds__card-name">{props.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}
