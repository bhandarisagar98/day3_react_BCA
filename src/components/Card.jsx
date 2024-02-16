import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ row }) => {
  const nav = useNavigate();
  return (
    <div>
      <img style={{ width: "200px", height: "200px" }} src={row.avatar} />
      <h3>{row.name}</h3>
      <p>{row.desc.slice(0, 70)}...</p>
      <p>{row.created_at}</p>
      <button onClick={() => nav(`/${row.id}`)}>see more</button>
    </div>
  );
};

export default Card;
