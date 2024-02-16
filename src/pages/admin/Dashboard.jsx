import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          width: "100%",
          background: "blue",
          color: "white",
          padding: "10px",
        }}
      >
        <p style={{ textAlign: "center" }}>Admin</p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "200px",
            height: "100vh",
            background: "red",
            padding: "20px",
          }}
        >
          <p>Home</p>
          <p>Create</p>
        </div>
        <div
          style={{
            width: "200px",
            height: "100vh",
            width: "100%",
            background: "white",
            padding: "20px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
