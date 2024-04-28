import React, { useState,useEffect } from "react"
import { Button } from "reactstrap";
import Course from "./Course"
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import NoCourses from "./NoCourses";

const Allcourses=()=>{

    useEffect (()=>{
        document.title="All Courses";
    },[]);


    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
           (response)=>{
            //if success
            console.log(response.data);
            toast.success("Courses have been loaded!!",{
                position:"bottom-left",
            });
            //for displaying the fetched course on the UI as useState fn(setCourses) maintains state on UI
            setCourses(response.data);
           },
           
           (error)=>{
            //if error occurs
            console.log(error);
            toast.error("OOPS, Something went wrong while loading courses!!",{
                position:"bottom-left",
            });
           }
        )
    };

    //calling function getAllCoursesFromServer
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);


    const [courses,setCourses]=useState([])

    const updateCourses=(id)=>{ 
        //except for the given id ,courses with all other ids will remain in the courses array
        setCourses(courses.filter((c)=>c.id != id));
    }

 return (
        <div>
            <h1 className="text-center my-3 display-5">All Courses</h1>
            <p className="text-center" style={{fontSize:25, fontStyle:"italic"}}>List of available courses are as follows:</p>
            {
                courses.length>0
                ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses}/>):
                <NoCourses/>
            }
        </div>
 );
};
export default Allcourses;
