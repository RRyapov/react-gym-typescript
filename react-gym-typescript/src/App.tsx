import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { BuyItemFrame } from "@shared/ui/buyItemFrame/BuyItemFrame";
import { Container, MainBackground, Footer } from "./common";
import { Header } from "./components";
import { ProgramsPage, DetailedProgramPage, MainPage } from "./pages";
import { programStorage } from "./stores";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 120000,
		},
	},
});

const App: FC = () => {
	const { getAllPrograms } = programStorage;

	useEffect(() => {
		getAllPrograms();
	}, [getAllPrograms]);

	return (
		<QueryClientProvider client={queryClient}>
			<MainBackground>
				<Container>
					<Header />
					<Routes>
						<Route
							path="/"
							element={<MainPage />}
						/>
						<Route
							path="/programs"
							element={<ProgramsPage />}
						/>
						<Route
							path="/program/:id"
							element={<DetailedProgramPage />}
						/>
					</Routes>
				</Container>
				<Footer />
			</MainBackground>
		</QueryClientProvider>
	);
};

export default observer(App);
