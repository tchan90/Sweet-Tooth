import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import Doughnuts from '../../img/doughnuts.jpg';

const Card2 = (props) => {
  return (
    <div>
      
      <Card className="box-shadow-card font-roboto">
        <CardImg top width="100%" src={Doughnuts} alt="doughnuts" className="responsive-img border-img" />
        <CardBody>
          <CardTitle><h2>Doughtnut Madness</h2></CardTitle>
          <CardSubtitle className="mt-2"><h4 className="gold-color font-weight-bold">Our new range of doughtnuts</h4></CardSubtitle>
          <CardText className="pt-2">Aliquam vitae mauris non lectus condimentum pretium. Nunc lorem nisl, tempus sed dapibus non, placerat et felis. Sed vitae eleifend nulla.</CardText>
          <Button className="mt-2 card-btn">View our range</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card2;