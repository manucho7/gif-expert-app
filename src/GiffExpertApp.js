import React, { useState } from "react";

const GiffExpertApp = (props) => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  //usamos hooks
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "HunterXHunter"]);
  };

  return (
    <>
      <h2>GiffExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};

export default GiffExpertApp;
