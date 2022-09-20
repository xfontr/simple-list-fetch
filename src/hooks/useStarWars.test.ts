import { renderHook } from "@testing-library/react";
import useSuperheroes from "./useStarWars";

jest.mock("axios", () => ({
  get: () => ({ data: { results: [{ name: "Luke" }] } }),
}));

describe("Given a getAllCharacter function returned by a useSuperheroes function", () => {
  describe("When called with a page 1 as an argument", () => {
    test("Then it should return a list of 1 StarWars character", async () => {
      const page = 1;

      const expectedResult = [{ name: "Luke" }];

      const {
        result: { current: getAllCharacters },
      } = renderHook(useSuperheroes);

      const result = await getAllCharacters(page);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
