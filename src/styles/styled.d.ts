import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      light: {
        background: string;
        hover: string;
        border: string;
      };
    };
  }
}
