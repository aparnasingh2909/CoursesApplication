import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateCourse=()=>{
   
    const navigate=useNavigate();
    const location = useLocation();
    const  course  = location.state;
    console.log(course);

    useEffect(()=>{
        document.title="Update Course";
     },[])

     const [newcourse,updateCourse]=useState({...course});

     const updateForm=(e)=>{
        console.log(newcourse);
        postUpdatedDataToServer(newcourse);
        //preventDefault prevents the default behavior 
        e.preventDefault();
      }
    
      //function to post data on server
      const postUpdatedDataToServer=(data)=>{
        axios.put(`${base_url}/courses/${data.id}`,data).then(
          (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course has been updated successfully 👍",{
              position:"bottom-left"
            });
            setTimeout(() => {
                navigate('/view-courses');
              }, 2000);
          },
          (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong while updating the course!!",{
              position:"bottom-left"
            });
          }
        )
      };

     return (
        <Fragment>
          <Container>
            <Form onSubmit={updateForm} className="mt-4">
              <h1 className="text-center my-3 display-6">Fill Updated Course Details</h1>
              <FormGroup className="mb-4">
                <label for="userId" className="mb-3">
                  Course ID
                </label>
                <Input
                  id="userId"
                  name="userId"
                  placeholder="Enter couse ID here"
                  type="text" value={newcourse.id}
                  onChange={(e)=>{
                    updateCourse({...newcourse,id:e.target.value})
                  }}
                />
              </FormGroup>
    
              <FormGroup className="mb-4">
                <label for="title" className="mb-3">
                  Course title
                </label>
                <Input id="title" placeholder="Enter title here" type="text" value={newcourse.title} onChange={(e)=>{
                  updateCourse({...newcourse,title:e.target.value})
                }}/>
              </FormGroup>
    
              <FormGroup className="mb-4">
                <label for="description" className="mb-3">
                  Course Description
                </label>
                <Input
                  id="description"
                  placeholder="Enter description here"
                  type="textarea" value={newcourse.description}
                  style={{ height: 150 }}
                  onChange={(e)=>{
                    updateCourse({...newcourse,description:e.target.value})
                  }}
                />
              </FormGroup>
              <Container className="text-center">
              <Button type="submit" color="success" style={{ marginRight: 20}}>
                Update Course
              </Button>
              <Button type="reset" color="warning" onClick={()=>{
                updateCourse({id:"",title:"",description:""});
              }}>Clear</Button>
              </Container>
            </Form>
          </Container>
        </Fragment>
     )
}

export default UpdateCourse