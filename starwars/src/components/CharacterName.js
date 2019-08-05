import React from "react";
import { Card } from "semantic-ui-react";

function CharacterName(props) {
  return <Card.Header>{props.name}</Card.Header>;
}

export default CharacterName;
