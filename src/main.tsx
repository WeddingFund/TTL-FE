import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import router from "./router";
import { theme } from "./styles/theme";
import { LoadingProvider } from "./context/LoadingContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </LoadingProvider>
    </ThemeProvider>
  </StrictMode>,
);
