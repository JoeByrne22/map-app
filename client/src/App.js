import './App.css';
import LoginForm from './components/Login.js'
import Map from './components/Map.js'
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
          <Route path="" element={<LoginForm />} />
          <Route path="/index" element={<Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
