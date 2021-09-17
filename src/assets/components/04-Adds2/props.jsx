import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="card productAdd__card">
        <div className={props.classTwo}>
          <img className={props.classThree} src={props.img} alt="" />
          <div className={props.classFour}>
            <div className="">
              <h5 className={props.classFive}>{props.title}</h5>
              <p className={props.classSix}>{props.text}</p>
              <span className={props.classSaven}>{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
