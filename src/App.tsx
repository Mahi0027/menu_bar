import React, { useEffect, useState } from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";

function App() {
  const [resourceData, setResouceData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("assets/data.json");
      setResouceData(await res.json());
    };
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Menubar</h1>
        <div className="menu_area">
          {resourceData.length > 0 &&
            resourceData.map((data: unknown) => (
              <MenuBar key={data?.id} resourceData={data} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
