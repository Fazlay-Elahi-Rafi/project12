import { useState } from "react";
import { useDispatch } from "react-redux";

export const useFetch = () => {
  const dispatch = useDispatch();

  const menuOne = () => {
    dispatch({ type: "SHOW" });
  };
  const menuTwo = () => {
    dispatch({ type: "TWO" });
  };
  const menuThree = () => {
    dispatch({ type: "THREE" });
  };
  const menuFour = () => {
    dispatch({ type: "FOUR" });
  };
  const menuFive = () => {
    dispatch({ type: "FIVE" });
  };

  return {
    menuOne,
    menuTwo,
    menuThree,
    menuFour,
    menuFive,
  };
};
