// import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Navigation } from './Components/Navigation';
import { AllCourses } from './Pages/AllCourses';
import { FullStackDevelopment } from './Pages/FullStackDevelopment';
import { DataScience } from './Pages/DataScience';
import { CyberSecurity } from './Pages/CyberSecurity';
import { Career } from './Pages/Career';
import { useState } from 'react';
import data from "./assets/Courses.json";
import { Footer } from './Components/Footer';


function App() {
  const [Courses] = useState(data);
  const fullStackCourses = Courses.filter((Courses) => Courses.courseType === "Full-stack");
  const dataScience = Courses.filter((Courses) => Courses.courseType === "DataScience");
  const cyberSecurity = Courses.filter((Courses) => Courses.courseType === "CyberSecurity");
  const career = Courses.filter((Courses) => Courses.courseType === "CareerPrograms");

  return (
    <>
      <div className="App">
        <div className="z-3 position-fixed top-0" style={{ width: "100%" }}>
          <Navigation />
        </div>
        <div className="container mt-5 pt-2">
          <Routes>
            <Route path="/" element={<AllCourses allCourses={Courses} />} />
            <Route
              path="/full-stack-development"
              element={
                <FullStackDevelopment fullStackCourses={fullStackCourses} />
              }
            />
            <Route
              path="/data-science"
              element={<DataScience dataScience={dataScience} />}
            />
            <Route
              path="/cyber-security"
              element={<CyberSecurity cyberSecurity={cyberSecurity} />}
            />
            <Route path="/career" element={<Career career={career} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
