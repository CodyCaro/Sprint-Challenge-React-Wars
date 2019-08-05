import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import CharacterName from "./CharacterName";
import CharacterBirth from "./CharacterBirth";

function CharacterCard(props) {
  return (
    <div>
      <Card>
        {/* <Image src={} wrapped ui={false} /> */}
        <Card.Content>
          <CharacterName name={props.data.name} />
          <CharacterBirth birth={props.data.birth_year} />
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
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
