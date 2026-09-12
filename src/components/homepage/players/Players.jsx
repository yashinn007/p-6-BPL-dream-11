import React, { use } from "react";

const Players = ({ playersPromise }) => {
  console.log(playersPromise);
  const data = use(playersPromise);
  console.log(data);
  return (
    <div>
      <h1> hi</h1>
    </div>
  );
};

export default Players;
