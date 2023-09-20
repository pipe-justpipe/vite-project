/* eslint-disable react/prop-types *////////////////////////////////////////////
import React from "react";
import Cards from "./Cards";
import Div from "./div";


const Welcome = ({ alert, data, statement }) => {
  return (
    <div>
      welcome
      <p>{statement}</p>
      <button onClick={alert}>click me!</button>
      <Div message = {statement}/>
    </div>
  );
};
// WE USE PROP TYPES TO TYPE CHECK I.E CHECK FOR THE TYPE
export default Welcome;
