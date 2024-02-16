import axios from "axios";
import React from "react";

const Create = () => {
  const createBlog = async (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);

    let formData = {
      name: data.get("name"),
      avatar: data.get("avatar"),
      desc: data.get("desc"),
    };

    let res = await axios.post(
      "https://65cd9528c715428e8b3e9af4.mockapi.io/blog",
      formData
    );
    if (res.status === 201) {
      alert("blog create successfully");
    }
  };
  return (
    <div style={{ color: "red" }}>
      <form
        onSubmit={createBlog}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
        }}
      >
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="avatar" placeholder="avatar" />
        <textarea type="text" name="desc" placeholder="desc" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
