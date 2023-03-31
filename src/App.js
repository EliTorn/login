import './App.css';
import LoginPage from "./loginPage";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import SignIn from "./signIn";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavLink style={{margin : "10px"}} to={"/sign-up"} >Sign Up</NavLink>
                <NavLink style={{margin : "10px"}}  to={"/sign-in"}>Sign In</NavLink>
                <Routes>
                    <Route path={"/sign-up"} element={<LoginPage/>} />
                    <Route path={"/sign-in"} element={<SignIn/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
