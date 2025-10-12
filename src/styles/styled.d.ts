import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      light: {
        hover: string;
      };
    };
  }
}
