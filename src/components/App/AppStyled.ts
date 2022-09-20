import styled from "styled-components";

const AppStyled = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.small};
  max-width: ${({ theme }) => theme.breakpoints.small};

  @media (min-width: ${({ theme }) => theme.breakpoints.big}) {
    max-width: ${({ theme }) => theme.breakpoints.big};
  }
`;

export default AppStyled;
