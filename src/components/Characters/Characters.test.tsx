import render from "../../test-utils/customRender/customRender";
import Characters from "./Characters";
import mockCharacter from "../../test-utils/mocks/mockCharacter";
import { screen } from "@testing-library/react";

describe("Given a Characters component", () => {
  describe("When instantiated with a list of 1 characters as props", () => {
    test("Then it should display said list", () => {
      const amountOfCharacters = 1;

      render(
        <Characters
          characters={new Array(amountOfCharacters).fill(mockCharacter)}
        />
      );

      const totalCharacters = screen.getAllByRole("heading", {
        name: mockCharacter.name,
      });

      expect(totalCharacters).toHaveLength(amountOfCharacters);
    });
  });
});
