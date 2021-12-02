import React, { useEffect, useState } from 'react';
import { ArtistData } from '../../models/artist';
import './Hero.css';
import { isEmpty } from 'lodash';

function Hero() {
  const [artist, setArtist] = useState({} as ArtistData);

  useEffect(() => {
    fetch('https://rest.bandsintown.com/artists/jasonisbell?app_id=test')
    .then((response) => response.json())
    .then((result: ArtistData) => {
      setArtist(result);
    });
  }, [])

  return isEmpty(artist) ? <p>Loading...</p> : (
    <div className="Hero" style={{ backgroundImage: `url("${artist.image_url}")` }}>
      <img src={artist.image_url} className="Artist-Thumb" alt="artist-thumb" />
      <div className="Artist-Info">
        <h1>{artist.name}</h1>
        <p>{`${artist.tracker_count} Followers • ${artist.upcoming_event_count} Upcoming Concerts`}</p>
      </div>
      <button className="Action" onClick={() => alert("suprise, I didn't implement this")}>Follow</button>
    </div>
  );
}

export default Hero;
