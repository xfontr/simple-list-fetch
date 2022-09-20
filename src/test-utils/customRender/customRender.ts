import { render, RenderOptions } from "@testing-library/react";
import Wrapper from "./Wrapper";

type ReactView = React.ReactElement<
  unknown,
  string | React.JSXElementConstructor<unknown>
>;

const customRender = (view: ReactView, options?: RenderOptions) =>
  render(view, { wrapper: Wrapper, ...options });

export default customRender;
