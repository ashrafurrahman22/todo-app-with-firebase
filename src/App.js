import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Pages/Login/RequireAuth";
import Login from "./Pages/Login/Login";
import SignUpMain from "./Pages/Login/SignUpMain";

function App() {
  return (
    <div className='min-h-screen p-20 flex justify-center items-center w-full bg-slate-700'>


      <Routes>
          <Route path="/" element={
            <RequireAuth>
            <Home></Home>
            </RequireAuth>
            }></Route>
          <Route path="/note/:notesId" element={
          <Home></Home>
          }></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUpMain></SignUpMain>}></Route>
      </Routes>
     

      <ToastContainer />
    </div>
  );
}

export default App;
