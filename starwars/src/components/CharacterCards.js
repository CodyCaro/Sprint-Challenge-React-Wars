import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterCards(props) {
  return (
    <div className="character-cards-container">
      {props.characterData.map(data => {
        return <CharacterCard data={data} key={data.name} />;
      })}
    </div>
  );
}

export default CharacterCards;
