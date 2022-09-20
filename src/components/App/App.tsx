import { useEffect, useState } from "react";
import useStarWars from "../../hooks/useStarWars";
import ICharacter from "../../types/ICharacter";
import Characters from "../Characters/Characters";

const App = (): JSX.Element => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const getAllCharacters = useStarWars();

  useEffect(() => {
    (async () => {
      const data = await getAllCharacters();
      setCharacters(data);
    })();
  }, [getAllCharacters]);

  return (
    <div className="app">
      {characters.length ? (
        <Characters characters={characters} />
      ) : (
        <span>It doesn't seem we have found any card, by now</span>
      )}
    </div>
  );
};

export default App;
