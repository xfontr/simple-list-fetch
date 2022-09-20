import { screen } from "@testing-library/react";
import render from "../../test-utils/customRender/customRender";
import mockCharacter from "../../test-utils/mocks/mockCharacter";
import Character from "./Character";

describe("Given a Character component", () => {
  describe("When instantiated with a character as props", () => {
    test("Then it should display all the character information", () => {
      render(<Character character={mockCharacter} />);

      const card = Object.values(mockCharacter).map((data) =>
        screen.getByText(data)
      );

      card.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
