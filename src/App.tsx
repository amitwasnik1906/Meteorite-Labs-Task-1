import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import MapPage from "./pages/MapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <HomePage />
          </>
        } />

        <Route path="/map" element={<MapPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
