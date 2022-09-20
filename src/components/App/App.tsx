import mockCharacter from "../../test-utils/mocks/mockCharacter";
import Character from "../Character/Character";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Character character={mockCharacter} />
    </div>
  );
};

export default App;
