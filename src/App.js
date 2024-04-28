import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateCourse from "./components/UpdateCourse";

function App() {
  const btnHandle = () => {
    toast.error("Wow so easy!", {
      postion: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/home" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<Allcourses />} exact />
                <Route path="/update-course" element={<UpdateCourse/>} exact/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
