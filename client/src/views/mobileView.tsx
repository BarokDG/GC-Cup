import Navbar from "../components/navbar";
import Header from "../components/header";

import Table from "../components/table";
import Fixtures from "../components/fixtures";
import Stats from "../components/stats";
import Teams from "../components/teams";

import { Routes, Route } from "react-router-dom";

export default function MobileView() {
  return (
    <>
      <Header />
      <main className="px-2">
        <Routes>
          <Route index element={<Table />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </main>
      <Navbar />
    </>
  );
}
