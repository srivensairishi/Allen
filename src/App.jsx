import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header.jsx'
import Home from './Home/Home.jsx'
import Courses from './Courses/Courses.jsx'
import TestSeries from './TestSeries/TestSeries.jsx';
import StudyMaterial from './StudyMaterial/StudyMaterial.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
	      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testseries" element={<TestSeries />} />
          <Route path="/studymaterials" element={<StudyMaterial />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
