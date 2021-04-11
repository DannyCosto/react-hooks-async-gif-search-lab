import React from 'react'

function GifList({ gifsData }) {
    return (
      <ul>
        {gifsData.map((gif) => (
          <li key={gif.url}>
            <img src={gif.url} alt="gif" />
          </li>
        ))}
      </ul>
    );
  }

export default GifList