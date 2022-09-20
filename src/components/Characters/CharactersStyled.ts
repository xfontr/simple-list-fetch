import styled from "styled-components";

const CharactersStyled = styled.article`
  .characters {
    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spacing.small};
    }
  }
`;

export default CharactersStyled;
