import React from "react";
import loading from "./loader.gif";
const spinner = () => {
  return (
    <div className="text-center">
      <img
        style={{ width: "30px" }}
        className="my-4"
        src={loading}
        alt="loading"
      />
    </div>
  );
};

export default spinner;