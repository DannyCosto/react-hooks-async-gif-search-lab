import GifSearch from "./GifSearch";
import GifList from "./GifList";
import React, { useEffect, useState } from "react";

function GifListContainer() {
    const [gifsData, SetGifsData] = useState([])
    const [query, setQuery] = useState("dolphins");

       useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=wC3p1ac2u7d87Tlx9aglGvjZpBrPqYuu&rating=g`)
        .then(res => res.json())
        .then(({ data }) => {
            const gifs = data.map((gif) => ({ url: gif.images.original.url }));
            SetGifsData(gifs);
          });
      }, [query]);

    return(
    <div style={{ display: "flex" }}>
        <GifSearch onSubmitQuery={setQuery}/>
        <GifList gifsData = {gifsData}/>

    </div>)
}

export default GifListContainer;