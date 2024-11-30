import { useRecoilValue } from "recoil"
import Login from "../components/LoginCard"
import SignupCard from "../components/SignUpCard"
import authScreenAtom from "../atoms/authAtom"


const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom)
  console.log(authScreenState);
  
  return (
    <>
      {authScreenState === "login" ? <Login/> : <SignupCard/>}
    </>
  )
}

export default AuthPage
