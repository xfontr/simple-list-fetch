import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import environment from "../configs/environment";

const useSuperheroes = () => {
  const getAll = useCallback(async (offset = 0, limit = 10) => {
    let superheroesLeft = limit - offset;
    const obtainedHeroes: object[] = [];

    do {
      (async () => {
        const { data }: AxiosResponse = await axios.get(
          `${environment.fullApiURL}`
        );

        obtainedHeroes.push(data);
      })();

      superheroesLeft = -1;
    } while (superheroesLeft > 0);

    return obtainedHeroes;
  }, []);

  return getAll;
};

export default useSuperheroes;
