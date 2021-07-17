import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import "./styles/CharacterCard.css";

function CharacterDetail({ baseApiUrl }) {
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${baseApiUrl}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => console.log(err));
  }, [baseApiUrl, id]);

  useEffect(() => {
    character.episode?.slice(-5).forEach((episode) => {
      fetch(episode)
        .then((res) => res.json())
        .then((data) =>
          setEpisodes((ep) => [
            ...ep,
            { name: data.name, episode: data.episode },
          ])
        )
        .catch((err) => console.log(err));
    });
  }, [character]);

  return character.error ? (
    <BackButton buttonClick={() => history.push("/")} />
  ) : (
    <div className="character">
      <div>
        <Button onClick={() => history.push("/")}>Back</Button>
        <div className="character-info">
          <img src={character.image} alt={character.name}/>
          <div className="character-detail">
          <h1>{character.name}</h1>
          <p><span>Status :</span> {character.status}</p>
          <p><span>Gender :</span> {character.gender}</p>
          <p><span>Species :</span> {character.species}</p>
          <p><span>Last episodes: </span>{episodes.map((ep) => (
            <p key={ep.name}>
              {ep.episode}: {ep.name}
            </p>
          ))}</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;