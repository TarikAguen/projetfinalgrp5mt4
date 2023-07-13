import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Challengeone from './pages/Challengeone';

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/challengeone" element={<Challengeone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
