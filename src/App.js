import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout"
import Admin from "./pages/admin/Admin";
import './style/Layout.scss'
import './style/home.scss'
import './style/index.scss'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
