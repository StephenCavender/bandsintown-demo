import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [artist, setArtist] = useState(undefined);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/')
  //   .then((response) => response.json())
  //   .then(({ count, results }) => {
  //     setCount(count);
  //     const names = results.map(r => r.name);
  //     setPokemon(names);
  //   });
  // }, [])

  return (
    <div className="Hero" style={{ backgroundImage: `url("https://via.placeholder.com/500")`}}>
      <img src="https://photos.bandsintown.com/thumb/11885985.jpeg" className="Artist-Thumb" alt="artist-thumb" />
      <div>
        <h1>Artist Name</h1>
        <p>497,199 Followers • 51 Upcoming Concerts</p>
      </div>
      <button className="Action">Follow</button>
    </div>
  );
}

export default Hero;
