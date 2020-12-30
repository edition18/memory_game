import { Fragment, useState } from "react";

const Card = (props) => {
  const { url, name, selected } = props.image;
  const display = (
    <div
      onClick={() => props.makeGuess(name)}
      className="card shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div className="img-container">
        <img src={url} alt={name}></img>
        <div>{name}</div>
      </div>
    </div>
  );

  return display;
};

export default Card;
