import ICharacter from "../../types/ICharacter";
import CharactersStyled from "./CharactersStyled";
import Character from "../Character/Character";

type CharactersProps = {
  characters: ICharacter[];
};

const Characters = ({ characters }: CharactersProps): JSX.Element => (
  <CharactersStyled>
    <ul className="characters__list">
      {characters.map((character) => (
        <li className="characters__character">
          <Character character={character} />
        </li>
      ))}
    </ul>
  </CharactersStyled>
);

export default Characters;
