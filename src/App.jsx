import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil"; 
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import userAtom from "./atoms/userAtom";
import LogoutButton from "./components/LogoutButton";

function App() {
  const user = useRecoilValue(userAtom)
  console.log(user)
  return (
    <RecoilRoot>
      <Container maxW="620px">
        <Header />
        <Routes>
        <Route path='/' element={user ? <HomePage/> : <AuthPage/>} />
        <Route path='/auth' element={!user ? <AuthPage /> : <HomePage/>} />
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:username/post/:pid" element={<PostPage />} />
        </Routes>
        {user && <LogoutButton/>}
      </Container>
    </RecoilRoot>
  );
}

export default App;
