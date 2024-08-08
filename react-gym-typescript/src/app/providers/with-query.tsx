import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

const queryClient = new QueryClient();

// const component: FC = () => {};
export const withQuery = (component: FC) => () => <QueryClientProvider client={queryClient}></QueryClientProvider>;
