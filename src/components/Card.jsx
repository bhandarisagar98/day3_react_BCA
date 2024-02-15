import React from "react";

const Card = ({ row }) => {
  return (
    <div>
      <img style={{ width: "200px", height: "200px" }} src={row.avatar} />
      <h3>{row.name}</h3>
      <p>{row.desc.slice(0, 70)}...</p>
      <p>{row.created_at}</p>
    </div>
  );
};

export default Card;
