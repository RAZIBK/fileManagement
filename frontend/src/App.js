import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";

import AdminRoute from "./components/Navigate/ProtectedRouter/AdminRoute";
import UserRoute from "./components/Navigate/ProtectedRouter/UserRoute";

import Admin from "./page/Home/Admin";
import UserHome from "./page/Home/UserHome";
import AdminSignup from "./page/LoginAndSignUp/AdminSignup";
import Login from "./page/LoginAndSignUp/Login";
import Signup from "./page/LoginAndSignUp/Signup";
import PdfForm from "./page/pdf/PdfForm";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route
          path="/"
          element={
            <UserRoute>
              <UserHome />
            </UserRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path="/admin/register" element={<AdminSignup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-pdf"
          element={
            <UserRoute>
              <PdfForm />
            </UserRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
