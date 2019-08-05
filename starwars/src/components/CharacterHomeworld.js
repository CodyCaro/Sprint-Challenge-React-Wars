import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

function CharacterHomeworld(props) {
  console.log(props.planet);
  const [planetName, setPlanetName] = useState("");
  let planetUrl = props.planet;

  useEffect(() => {
    axios
      .get(`${planetUrl}`)
      .then(res => {
        setPlanetName(res.data.name);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <Card.Description>Homeworld: {planetName}</Card.Description>;
}

export default CharacterHomeworld;
