import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiffExpertApp = ({ defaultCategories= [] }) => {
  //usamos hooks
  //const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GiffExpertApp;
