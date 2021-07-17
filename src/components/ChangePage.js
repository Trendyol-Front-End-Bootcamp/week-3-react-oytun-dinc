import React from "react";
import Button from "./Button";
import "./styles/ChangePage.css";

function ChangePage ({ prev, next, setApi }) {

  return (
    <div className="change-page">
      <Button disabled={!prev} onClick={() => setApi(prev)}>
        Previous
      </Button>
      <Button disabled={!next} onClick={() => setApi(next)}>
        Next
      </Button>
    </div>
  );
}

export default ChangePage;