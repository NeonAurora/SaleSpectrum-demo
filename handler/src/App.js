import { useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import customTheme from "theme";
import OverallStatPage from "scenes/OverallStats";
import TransactionPage from "scenes/Transactions";
import UsersPage from "scenes/Users";
import ProductsPage from "scenes/Products";
import ProductStatPage from "scenes/ProductStats";
import CustomTradePage from "scenes/CustomTrades";
import Layout from "scenes/Layout";
import SubpageContext from "components/Routings/SubpageContext";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = customTheme(mode);
  // const [activeSubpage, setActiveSubpage] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <SubpageContext.Provider value={{ activeSubpage, setActiveSubpage }}> */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<OverallStatPage />} />
                <Route path="/overallStats/*" element={<OverallStatPage />} />
                <Route path="/transactions/*" element={<TransactionPage />} />
                <Route path="/users/*" element={<UsersPage />} />
                <Route path="/products/*" element={<ProductsPage />} />
                <Route path="/productStats/*" element={<ProductStatPage />} />
                <Route path="/customTrades/*" element={<CustomTradePage />} />
              </Route>
              {/* Add your other routes here */}
            </Routes>
          {/* </SubpageContext.Provider> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
