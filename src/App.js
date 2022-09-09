import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import MemberTable from "./components/member/memberTable";
import Register from "./components/register/register";
import NewFrontPage from "./components/newFrontpage/newfrontpage";
import { Provider } from "react-redux";
import store from "./common/store/store";
import Dashboard from "./components/dashboard/dashboard";
import CardHome from "./components/card/cardHome";
import ResponsiveAppBar from "./components/newFrontpage/appBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <ResponsiveAppBar />
                    <Routes>
                        <Route exact path="" element={<NewFrontPage />} />
                        <Route path="login" element={<Login />}></Route>
                        <Route path="register" element={<Register></Register>} />
                        <Route path="member" element={<MemberTable />} />
                        <Route path="card" element={<CardHome />} />
                        <Route path="dashboard" element={<Dashboard />}></Route>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
