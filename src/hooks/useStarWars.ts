import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import environment from "../configs/environment";
import ICharacter from "../types/ICharacter";

const useStarWars = () => {
  const getAllCharacters = useCallback(
    async (page = 1): Promise<ICharacter[] | void> => {
      try {
        const {
          data: { results },
        }: AxiosResponse = await axios.get(
          `${environment.apiURL}/people/?page=${page}`
        );

        return results;
      } catch (error) {
        return undefined;
      }
    },
    []
  );

  return getAllCharacters;
};

export default useStarWars;
