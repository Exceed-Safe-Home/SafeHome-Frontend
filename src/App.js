import './App.css'
import React from "react";
import LoginPage from "./components/LoginPage";
import MainStatusPage from "./components/MainStatusPage";
import Register from "./components/Register";
import { Route, Routes} from "react-router-dom";
import LoginFailed from './components/RedirectPage/LoginFailed';
import LoginSuccess from './components/RedirectPage/LoginSuccess';
import BackToLogin from './components/RedirectPage/BackToLogin';
import RegisterFailed from './components/RedirectPage/RegisterFailed'
import RegisterSuccess from './components/RedirectPage/RegisterSuccess';

function App() {
  return (
    // <Switch>
    //   <Route exact path="/" component={LoginPage} />
    //   <Route exact path="/register" component={Register} />
    //   <Route exact path="/main" component={MainStatusPage} />
    // </Switch>
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/main" element={<MainStatusPage/>} />
          <Route exact path="/:id" element={<LoginPage/>} />
          <Route exact path="/login=fail" element={<LoginFailed/>} />
          <Route exact path="/login=success" element={<LoginSuccess/>} />
          <Route exact path="/backtologin" element={<BackToLogin/>} />
          <Route exact path="/register=fail" element={<RegisterFailed/>} />
          <Route exact path="/register=success" element={<RegisterSuccess/>} />
        </Routes>
    </div>
  );
}

export default App;
