import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import environment from "../configs/environment";

const useStarWars = () => {
  const getAllCharacters = useCallback(async (page = 1): Promise<object[]> => {
    const {
      data: { results },
    }: AxiosResponse = await axios.get(
      `${environment.apiURL}/people/?page=${page}`
    );

    return results;
  }, []);

  return getAllCharacters;
};

export default useStarWars;
