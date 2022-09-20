import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

const Wrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
);

export default Wrapper;
