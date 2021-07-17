import React, { useState, useEffect } from "react";
import ChangePage from "../components/ChangePage";
import Search from "../components/Search";
import CharacterList from "../components/CharacterList";
import BackButton from "../components/BackButton";

function Home({ baseApiUrl }) {
  const [api, setApi] = useState(baseApiUrl);
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      })
  }, [api]);

  return (
    <div>
      <Search baseApiUrl={baseApiUrl} setApiUrl={setApi} />
      {characters.error ? (
        <BackButton buttonClick={() => setApi(baseApiUrl)} />
      ) : (
        <>
          <CharacterList characters={characters.results} />
          <ChangePage
            setApi={setApi}
            next={characters.info?.next}
            prev={characters.info?.prev}
          />
        </>
      )}
    </div>
  );
}

export default Home;