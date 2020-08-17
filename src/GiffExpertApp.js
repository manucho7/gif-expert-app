import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

const GiffExpertApp = (props) => {
  //usamos hooks
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "HunterXHunter"]);
  //   };

  return (
    <>
      <h2>GiffExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};

export default GiffExpertApp;
