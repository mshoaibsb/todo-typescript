import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";

const App_Routes: React.FC = (): JSX.Element =>{
    return (
        <Router>
            <Routes>
                <Route index element = {<Home/>}/>
                {/*Auth Routes*/}
                <Route path = 'register' element = {<Register/>} />
                <Route path = 'login' element = {<Login/>} />
                <Route path = 'forget-password' element = {<ForgetPassword/>} />
            </Routes>
        </Router>
    )
}

export default App_Routes