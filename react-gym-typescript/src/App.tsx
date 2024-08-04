import React, { useEffect } from "react";
import { Header } from "./components";
import { ProgramsPage, DetailedTrainingProgramPage, MainPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Container, MainBackground, Footer } from "./common";
import { observer } from "mobx-react-lite";
import { programStorage } from "./stores";



const App: React.FC = () => {
  const { getAllPrograms } = programStorage;

  useEffect(() => {
    getAllPrograms();
  }, [getAllPrograms]);

  return (
    <MainBackground>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route
              path="/program/:id"
              element={<DetailedTrainingProgramPage />}
            />
          </Routes>
        </Container>
      <Footer />
    </MainBackground>
  );
};

export default observer(App);
