import { renderHook } from "@testing-library/react";
import mockCharacter from "../test-utils/mocks/mockCharacter";
import ICharacter from "../types/ICharacter";
import useSuperheroes from "./useStarWars";

type IResponse =
  | {
      data: {
        results: ICharacter[];
      };
    }
  | Promise<never>;

let mockResponse: IResponse = {
  data: {
    results: [mockCharacter],
  },
};

jest.mock("axios", () => ({
  get: () => mockResponse,
}));

describe("Given a getAllCharacter function returned by a useSuperheroes function", () => {
  describe("When called with a page 1 as an argument", () => {
    test("Then it should return a list of 1 StarWars character", async () => {
      const page = 1;

      const expectedResult = [mockCharacter];

      const {
        result: { current: getAllCharacters },
      } = renderHook(useSuperheroes);

      const result = await getAllCharacters(page);

      expect(result).toStrictEqual(expectedResult);
    });

    test("Then it should return nothing (undefined) if an error ocurred", async () => {
      const page = 1;
      mockResponse = Promise.reject(new Error());

      const {
        result: { current: getAllCharacters },
      } = renderHook(useSuperheroes);

      const result = await getAllCharacters(page);

      expect(result).toBeUndefined();
    });
  });
});
