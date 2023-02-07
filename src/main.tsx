import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Portfolio from "routes/Portfolio";
import Skills from "routes/Skills";
import Works from "routes/Works";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#eef2f6",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
