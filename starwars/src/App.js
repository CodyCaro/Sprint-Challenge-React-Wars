import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/StarWars.scss";
import CharacterCards from "./components/CharacterCards";
import { Button } from "semantic-ui-react";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);
  const [newPeopleUrl, setNewPeopleUrl] = useState(
    "https://swapi.co/api/people/?page=1"
  );

  let [nextPageCount, setNextPageCount] = useState(1);

  console.log(newPeopleUrl);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`${newPeopleUrl}`)
      .then(res => {
        console.log(res);
        setCharacterData(res.data.results);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [newPeopleUrl]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="cards-container">
        <CharacterCards characterData={characterData} />
      </div>
      <div>
        <Button
          className={nextPageCount <= 1 ? "remove-button" : null}
          onClick={() => {
            setNextPageCount((nextPageCount -= 1));
            setNewPeopleUrl(
              `https://swapi.co/api/people/?page=${nextPageCount.toString()}`
            );
          }}
        >
          Previous Character Page
        </Button>
        <Button
          onClick={() => {
            setNextPageCount((nextPageCount += 1));
            setNewPeopleUrl(
              `https://swapi.co/api/people/?page=${nextPageCount.toString()}`
            );
          }}
        >
          Next Character Page
        </Button>
      </div>
    </div>
  );
};

export default App;
