import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil"; 
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <RecoilRoot>
      <Container maxW="620px">
        <Header />
        <Routes>
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:username/post/:pid" element={<PostPage />} />
        </Routes>
      </Container>
    </RecoilRoot>
  );
}

export default App;
