import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from './pages/View'
import About from "./pages/About";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from "./pages/Search";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route  path="/about" element={<About/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
