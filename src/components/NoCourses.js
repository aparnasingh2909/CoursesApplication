import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const NoCourses = () => {

  useEffect(()=>{
    document.title="No courses";
  });

  return (
    <div>
      <Card className="text-center" style={{height:'30vh',paddingBottom:10, paddingTop:10,backgroundColor:'#C5E1A5'}}
      >
        <CardBody>
          <CardTitle className="display-6 mb-4">No Courses Available</CardTitle>
          <CardSubtitle className="mb-4 text-muted" tag="h6" style={{fontSize:25}}>
            We are working on the courses. We'll get back to you soon !! 😊 
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};
export default NoCourses;