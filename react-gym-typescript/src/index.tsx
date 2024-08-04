import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Reset } from "styled-reset";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
console.log('queryClient: ', queryClient);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <Reset />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  </React.StrictMode>
);
