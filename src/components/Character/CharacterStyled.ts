import styled from "styled-components";

const CharacterStyled = styled.article`
  padding: ${({ theme }) => theme.spacing.big};
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.shaping.radiusSmall};
  max-width: 25rem;

  .character {
    &__name {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0 0.2rem 0;
    }

    &__main-data {
      margin-bottom: ${({ theme }) => theme.spacing.small};
    }

    &__body {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spacing.small};
    }

    &__data {
      width: 45%;

      & > * {
        display: block;
      }
    }
  }

  .data__heading {
    font-weight: bold;
  }
`;

export default CharacterStyled;
