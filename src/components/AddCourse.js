import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {

  const navigate=useNavigate();
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState([]);

  //fn to handle form when submitted
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    //preventDefault prevents the default behavior
    e.preventDefault();
  };

  //function to post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course has been added successfully!!", {
          position: "bottom-left",
        });
        setTimeout(() => {
          navigate('/view-courses');
        }, 2000);
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error!! Something went wrong!!", {
          position: "bottom-left",
        });
      }
    );
  };

  return (
    <Fragment>
      <Container>
        <Form onSubmit={handleForm} className="mt-4">
          <h1 className="text-center my-3 display-5">Fill Course Details</h1>
          <FormGroup className="mb-4">
            <label for="userId" className="mb-3">
              Course ID
            </label>
            <Input
              id="userId"
              name="userId"
              placeholder="Enter couse ID here"
              type="text"
              onChange={(e) => {
                setCourse({ ...course, id: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup className="mb-4">
            <label for="title" className="mb-3">
              Course title
            </label>
            <Input
              id="title"
              placeholder="Enter title here"
              type="text"
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup className="mb-4">
            <label for="description" className="mb-3">
              Course Description
            </label>
            <Input
              id="description"
              placeholder="Enter description here"
              type="textarea"
              style={{ height: 150 }}
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />
          </FormGroup>
          <Container className="text-center">
            <Button
              type="submit"
              color="success"
              style={{ marginRight: 20}}
            >
              Add Course
            </Button>
            <Button
              type="reset"
              color="warning"
              onClick={() => {
                setCourse({ id: "", title: "", description: "" });
              }}
            >
              Clear
            </Button>
          </Container>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AddCourse;
