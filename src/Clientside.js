import React, { useState } from "react";

const Clientside = ({ name, answer }) => {
  const [text, setText] = useState(false);

  const display = () => {
    // alert("displayed")
    setText(!text);
  };
  return (
    <>
      <div className="name">
        <h2>{name} </h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2 style={{ color: "orange",fontSize:"20px" }}>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </h2>

        <p onClick={display}>
          {text ? (
            <i class="fa-solid fa-circle-chevron-up"></i>
          ) : (
            <i class="fa-solid fa-circle-chevron-down"></i>
          )}
        </p>
      </div>

      <div className="answer">{text && <p>{answer}</p>}</div>
    </>
  );
};

export default Clientside;
