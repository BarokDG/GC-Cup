import Navbar from "../components/navbar";
import Header from "../components/header";

import Table from "../components/table";
import Fixtures from "../components/fixtures";
import Stats from "../components/stats";
import Teams from "../components/teams";

import { Routes, Route, Outlet } from "react-router-dom";

export default function MobileView() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Table />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Outlet />
      <Navbar />
    </>
  );
}
