import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";
import UpdateCourse from "./UpdateCourse";

const Course = ({ course,update }) => {

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        console.log(response);
        console.log("Course deleted successfully");
        toast.success("Course deleted successfully",{
          position:"bottom-left"
        });
        update(id);
      },
      (error)=>{
        console.log(error);
        toast.error("Course could not be deleted! There is some issue on the server",{
          position:"bottom-left"
        });
      }
    )
  }

  return (
    <Card className="text-center mb-2" style={{border:'2px solid #BDBDBD'}}>
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            style={{ marginRight: 20 }}
            onClick={() => {
              deleteCourse(course.id);
            }}
          >Delete</Button>
          {/* <Button color="warning">Update</Button> */}
          <Link className="btn btn-warning" tag="a" state={course} to="/update-course" action>Update</Link>
        </Container>
      </CardBody>
    </Card>
  );
};
export default Course;
