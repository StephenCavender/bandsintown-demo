import React from 'react';
import { ArtistData } from '../../models/artist';
import './Hero.css';

function Hero(props: { artist: ArtistData }) {

  return (
    <div className="Hero" style={{ backgroundImage: `url("${props.artist.image_url}")` }}>
      <img src={props.artist.image_url} className="Artist-Thumb" alt="artist-thumb" />
      <div className="Artist-Info">
        <h1>{props.artist.name}</h1>
        <p>{`${props.artist.tracker_count} Followers • ${props.artist.upcoming_event_count} Upcoming Concerts`}</p>
      </div>
      <button className="Action" onClick={() => alert("suprise, I didn't implement this")}>Follow</button>
    </div>
  );
}

export default Hero;
