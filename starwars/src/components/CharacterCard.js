import React from "react";
import { Card, Icon } from "semantic-ui-react";
import CharacterName from "./CharacterName";
import CharacterBirth from "./CharacterBirth";
import CharacterHomeworld from "./CharacterHomeworld";

function CharacterCard(props) {
  return (
    <div>
      <Card>
        <Card.Content>
          <CharacterName name={props.data.name} />
          <CharacterBirth birth={props.data.birth_year} />
        </Card.Content>
        <CharacterHomeworld planet={props.data.homeworld} />
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CharacterCard;
