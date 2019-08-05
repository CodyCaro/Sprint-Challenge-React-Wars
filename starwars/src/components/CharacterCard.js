import React from "react";
import { Card, Icon } from "semantic-ui-react";
import CharacterName from "./CharacterName";
import CharacterBirth from "./CharacterBirth";
import CharacterHomeworld from "./CharacterHomeworld";
import CharacterFilmCount from "./CharacterFilmCount";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <Card>
        <Card.Content>
          <CharacterName name={props.data.name} />
          <CharacterBirth birth={props.data.birth_year} />
        </Card.Content>
        <CharacterHomeworld planet={props.data.homeworld} />
        <Card.Content extra>
          <CharacterFilmCount filmCount={props.data.films.length} />
        </Card.Content>
      </Card>
    </div>
  );
}

export default CharacterCard;
