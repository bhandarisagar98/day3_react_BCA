import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const fetchBlog = async () => {
    const res = await axios.get(
      "https://65cd9528c715428e8b3e9af4.mockapi.io/blog"
    );
    console.log(res);

    setData(res.data);
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        padding: "30px",
      }}
    >
      {data.map((row) => {
        return <Card key={row.id} row={row} />;
      })}
    </div>
  );
}

export default App;
