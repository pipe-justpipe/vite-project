import React from "react";

const Welcome = ({ alert, data }) => {
  return (
    <div>
      welcome
      <button onClick={alert}>click me!</button>
    </div>
  );
};
// WE USE PROP TYPES TO TYPE CHECK I.E CHECK FOR THE TYPE
export default Welcome;
