import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Leads from "scenes/leads";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import GreaterWealth from "scenes/greaterWealth";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Login from "scenes/login";
import RequestAccess from "scenes/reqAccess";
import AuditLogs from "scenes/auditLogs";
import Radial from "scenes/radial";
import ForgotPassword from "scenes/forgotPassword";
import ResetPass from "scenes/resetPass";
import ResetRequest from "scenes/resetReq";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetRequest" element={<ResetRequest />} />
            <Route path="/resetPass" element={<ResetPass />} />
            <Route path="/request-access" element={<RequestAccess />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients" element={<Products />} />
              <Route path="/Leads" element={<Leads />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/greater wealth" element={<GreaterWealth />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/audit logs" element={<AuditLogs/>} />
              <Route path="/radial" element={<Radial/>}/>
              <Route path="/admin" element={<Admin/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
