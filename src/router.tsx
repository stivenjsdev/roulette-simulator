import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import GamePage from "./views/GamePage";
import IndexPage from "./views/IndexPage";
import RoulettePage from "./views/RoulettePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/roulette" element={<RoulettePage />} />
          <Route path="/game" element={<GamePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
