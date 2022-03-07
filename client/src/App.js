import './App.css';
import LoginForm from './components/Login.js'
import MapApp from './components/Map.js'
import Home from './components/Home.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/index" element={<MapApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
