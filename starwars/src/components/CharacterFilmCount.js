import React from "react";
import { Icon } from "semantic-ui-react";

function CharacterFilmCount(props) {
  return (
    <a>
      <Icon name="film" />
      Amount of Films: {props.filmCount}
    </a>
  );
}

export default CharacterFilmCount;
