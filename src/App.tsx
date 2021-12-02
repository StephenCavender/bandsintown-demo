import React, { KeyboardEvent, useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import { ArtistData } from './models/artist';
import { debounce, isEmpty } from 'lodash';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const [artist, setArtist] = useState({} as ArtistData);

  const handleChange = debounce((event) => {
    setSearchTerm(event.target.value);
  }, 0); // debounce was for getting search suggestions...

  // search api blocked by CORS
  // useEffect(() => {
  //   if (!searchTerm) return;

  //   fetch(`https://bandsintown.com/searchSuggestions?searchTerm=${searchTerm}`)
  //   .then((response) => response.json())
  //   .then(({ artists }) => {
  //     // TODO: type this map func
  //     const names = artists.map((a: any) => a.name);
  //     setSearchResults(names);
  //   });
  // }, [searchTerm])

  const select = (artist: string) => {
    fetch(`https://rest.bandsintown.com/artists/${artist.trim()}?app_id=test`)
    .then((response) => response.json())
    .then((result: ArtistData) => {
      setArtist(result);
    });
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      select(searchTerm);
    }
  }

  return (
    <div className="App">
      <div>
        <input onChange={handleChange} type="text" placeholder="Search Artists..." onKeyDown={handleKeyDown} />
        <button onClick={() => select(searchTerm)}>Select</button>
      </div>
      {/* <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
      { isEmpty(artist) ? <h1>404 artist not found, try Nate Smith</h1> : <Hero artist={artist} /> }
    </div>
  );
}

export default App;
