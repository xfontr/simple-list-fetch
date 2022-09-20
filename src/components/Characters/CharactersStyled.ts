import styled from "styled-components";

const CharactersStyled = styled.section`
  .characters {
    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spacing.big};
    }

    &__character {
      width: 100%;
      height: 16rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        width: 31%;
      }
    }
  }
`;

export default CharactersStyled;
