import { useEffect, useState } from "react";
import useStarWars from "../../hooks/useStarWars";
import ICharacter from "../../types/ICharacter";
import Characters from "../Characters/Characters";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const getAllCharacters = useStarWars();

  useEffect(() => {
    (async () => {
      const data = await getAllCharacters();
      setCharacters(data ? data : []);
    })();
  }, [getAllCharacters]);

  return (
    <AppStyled>
      <h1>Star Wars characters</h1>
      {characters.length ? (
        <Characters characters={characters} />
      ) : (
        <span>It doesn't seem we have found any card, by now</span>
      )}
    </AppStyled>
  );
};

export default App;
