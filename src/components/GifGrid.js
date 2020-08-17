import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=rick and morty&limit=10&api_key=EKYfdfTGfUEzUTT5g5wl1ONxKqC6u2Rx'
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);

    }

    getGifs();

    return (
            <>
                <h3>{ category }</h3>
            </>
    )
}

export default GifGrid;