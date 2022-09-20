import ICharacter from "../../types/ICharacter";
import CharacterStyled from "./CharacterStyled";

type CharacterProps = {
  character: ICharacter;
};

const Character = ({ character }: CharacterProps): JSX.Element => (
  <CharacterStyled>
    <header className="character__main-data">
      <h3 className="character__name">{character.name}</h3>
      <span className="character__birth">{character.birth_year}</span>
    </header>
    <ul className="character__body">
      <li className="character__data">
        <span className="data__heading">Height</span>
        {character.height}
      </li>
      <li className="character__data">
        <span className="data__heading">Mass</span>
        {character.mass}
      </li>
      <li className="character__data">
        <span className="data__heading">Eye color</span>
        {character.eye_color}
      </li>
      <li className="character__data">
        <span className="data__heading">Hair color</span>
        {character.hair_color}
      </li>
      <li className="character__data">
        <span className="data__heading">Gender</span>
        {character.gender}
      </li>
      <li className="character__data">
        <span className="data__heading">Skin color</span>
        {character.skin_color}
      </li>
    </ul>
  </CharacterStyled>
);

export default Character;
