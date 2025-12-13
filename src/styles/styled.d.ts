import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    deviceSizes: {
      // mobile5: number;
      // mobile4: number;
      // mobile3: number;
      // mobile2: number;
      mobile: number;
      tablet: number;
      // desktop2: number;
      desktop: number;
    };
    device: {
      mobile: string;
      // mobile2: string;
      // mobile3: string;
      // mobile4: string;
      // mobile5: string;
      tablet: string;
      // desktop2: string;
      desktop: string;
    };
    colors: {
      light: {
        background: string;
        hover: string;
        border: string;
      };
    };
  }
}
