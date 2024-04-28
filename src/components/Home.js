import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { UncontrolledCarousel } from "reactstrap";

const Home = () => {

  useEffect(()=>{
    document.title="HOME || COURSES APP";
  });

  return (
    <div>
      <Card className="text-center" style={{height:'40vh',paddingBottom:10, paddingTop:10,backgroundColor:'#E0E0E0'}}
      >
        <CardBody>
          <CardTitle className="display-6 mb-4">CourseStack Application</CardTitle>
          <CardSubtitle className="mb-4 text-muted" tag="h6" style={{fontSize:25}}>
            A plethora of learning opportunities for you !!
          </CardSubtitle>
          <CardText>
            You can learn all trending frameworks and technologies on this platform.
          </CardText>
          <Button color="success" className="mt-3">Start Learning</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
