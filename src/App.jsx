import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PKMSystem from "./pages/PKMSystem.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/pkm" element={<PKMSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
