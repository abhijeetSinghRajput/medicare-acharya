import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
