import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlockPage from "./pages/BlockPage";
import Home from "./pages/Home";
import TxPage from "./pages/TxPage";
import AddressPage from "./pages/AddressPage";
import Tokens from './pages/Tokens';
import ValidatorPage from './pages/ValidatorPage';
import Blockchain from './pages/Blockchain';

export default function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center text-[#36454F]"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Navigate to="/blockchain" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/block" element={<BlockPage />} />
          <Route path="/tx" element={<TxPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/validators" element={<ValidatorPage />} />
          <Route path="/blockchain" element={<Blockchain />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
