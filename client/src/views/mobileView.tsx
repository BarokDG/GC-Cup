import Navbar from "../components/navbar";
import Header from "../components/header";

import Table from "../components/table";
import Matches from "../components/matches";
import Stats from "../components/stats";

import { Routes, Route } from "react-router-dom";

export default function MobileView() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-slate-900 px-2 overflow-x-hidden pb-36">
        <Routes>
          <Route index element={<Table />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Table />} />
        </Routes>
      </main>
      <Navbar />
    </>
  );
}
