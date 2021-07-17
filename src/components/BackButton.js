import React from "react";
import Button from "./Button";
import "./styles/BackButton.css";

function BackButton({ buttonClick }) {
  return (
    <div className="back-button">
      <Button onClick={buttonClick}>Back</Button>
    </div>
  );
}

export default BackButton;
