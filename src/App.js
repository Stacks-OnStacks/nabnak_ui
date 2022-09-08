import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCard from "./components/card/createCard";
import Login from "./components/login/login";
import MemberTable from "./components/member/memberTable";
import Navbar from "./components/newFrontpage/navbar";
import Register from "./components/register/register";
import NewFrontPage from "./components/newFrontpage/newfrontpage";
import { Provider } from "react-redux";
import store from "./common/store/store";
import Dashboard from "./components/dashboard/dashboard";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                    <Routes>
                        <Route exact path="" element={<NewFrontPage />} />
                        <Route path="login" element={<Login />}></Route>
                        <Route path="register" element={<Register></Register>} />
                        <Route path="member" element={<MemberTable />} />
                        <Route path="card" element={<CreateCard />} />
                        <Route path="dashboard" element={<Dashboard />}></Route>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
