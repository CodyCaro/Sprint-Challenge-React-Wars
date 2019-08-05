import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterCards(props) {
  return (
    <div>
      {props.characterData.map(data => {
        return <CharacterCard data={data} key={data.name} />;
      })}
    </div>
  );
}

export default CharacterCards;
