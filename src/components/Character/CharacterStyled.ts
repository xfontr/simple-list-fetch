import styled from "styled-components";

const CharacterStyled = styled.article`
  padding: ${({ theme }) => theme.spacing.big};
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.shaping.radiusSmall};
  max-height: 16rem;
  overflow: hidden;

  .character {
    &__name {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0 0.2rem 0;
    }

    &__main-data {
      margin-bottom: ${({ theme }) => theme.spacing.big};
    }

    &__body {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: ${({ theme }) => theme.spacing.big};
    }

    &__data {
      max-width: 35%;

      & > * {
        display: block;
      }
    }
  }

  .data__heading {
    font-weight: bold;
  }

  .left-section,
  .central-section,
  .right-section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.big};
  }
`;

export default CharacterStyled;
