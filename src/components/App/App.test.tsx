import { screen } from "@testing-library/react";
import render from "../../test-utils/customRender/customRender";
import mockCharacter from "../../test-utils/mocks/mockCharacter";
import App from "./App";

const mockAmountOfCharacters = 1;
const mockCharacterList = new Array(mockAmountOfCharacters).fill(mockCharacter);

jest.mock("axios", () => ({
  get: () => ({ data: { results: mockCharacterList } }),
}));

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should obtain a list of cards from an API and display it", async () => {
      render(<App />);

      const totalCharacters = await screen.findAllByRole("heading", {
        name: mockCharacter.name,
      });

      expect(totalCharacters).toHaveLength(mockAmountOfCharacters);
    });

    test("Then it should display a message if no cards have been found yet", () => {
      const expectedMessage = "It doesn't seem we have found any card, by now";

      render(<App />);

      const totalCharacters = screen.queryAllByRole("heading", {
        name: mockCharacter.name,
      });

      const shownMessage = screen.getByText(expectedMessage);

      expect(totalCharacters).toHaveLength(0);
      expect(shownMessage).toBeInTheDocument();
    });
  });
});
