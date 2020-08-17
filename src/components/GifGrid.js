import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async () => {

    const url =
        "https://api.giphy.com/v1/gifs/search?q=rick and morty&limit=10&api_key=EKYfdfTGfUEzUTT5g5wl1ONxKqC6u2Rx";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });

    console.log(gifs);
    setImages( gifs );
    };

//    getGifs();

    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">


                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                    />
                    ))
                }

            </div>
        </>
    )
};

export default GifGrid;
