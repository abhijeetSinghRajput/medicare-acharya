import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DoctorPage from "./pages/doctor/DoctorPage";
import { AdminLayout } from "./components/admin/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import ApointmentPage from "./pages/admin/ApointmentPage";
import UserManagement from "./pages/admin/UserManagement";
import Customization from "./pages/admin/Customization";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/doctor/:doctorId" element={<DoctorPage/>}/>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<DashboardPage/>}/>
          <Route path="apointments" element={<ApointmentPage/>}/>
          <Route path="users" element={<UserManagement/>}/>
          <Route path="customization" element={<Customization/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
