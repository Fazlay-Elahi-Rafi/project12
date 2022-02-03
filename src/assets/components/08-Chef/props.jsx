import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="card chef__card">
        <div className="chef__card-img">
          <div className="chef__card-social">
            <ul className="chef__card-social--list">
              <li>{props.Fb}</li>
              <li>{props.Tw}</li>
              <li>{props.Ins}</li>
            </ul>
          </div>
          <img src={props.img} className="img-fluid" alt="img" />
        </div>
        <div className="chef__card-body text-center">
          <h5 className="chef__card-body--title">{props.title}</h5>
          <p className="chef__card-body--text">{props.text}</p>
          <hr className="chef__card-body--hr" />
        </div>
      </div>
    </>
  );
}
