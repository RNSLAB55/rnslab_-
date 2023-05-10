import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import React,{lazy,Suspense} from 'react';
import Login from './page/login';

const SingUp = lazy(async () => await import("./page/signUp"));
const Main = lazy(async () => await import("./page/main/main"));

function App() {
  return (
   <Router>
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/singup"} element={<Suspense fallback={<></>}><SingUp /></Suspense>} />
      <Route path={"/main"} element={<Suspense fallback={<></>}><Main /></Suspense>} />
    </Routes>
   </Router>
  );
}

export default App;
