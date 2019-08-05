import React from "react";
import { Card } from "semantic-ui-react";

function CharacterBirth(props) {
  return (
    <Card.Meta>
      <span className="date">{props.birth}</span>
    </Card.Meta>
  );
}

export default CharacterBirth;
