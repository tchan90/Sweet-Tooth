import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import CaramelCake from '../../img/icecream-caramel.jpg';

const Card1 = (props) => {
  return (
    <div>
      
       <Card className="box-shadow-card font-roboto">
         <CardImg top width="100%" src={CaramelCake} alt="caramel cake" className="responsive-img border-img"/>
        <CardBody>
          <CardTitle><h2>Brownie Delight</h2></CardTitle>
          <CardSubtitle><h4 className="gold-color font-weight-bold">Chocolate goodness!</h4></CardSubtitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus commodo nibh nec porttitor. Sed arcu eros, tempus quis pharetra sed, lobortis at nibh. Aliquam erat volutpat. Vestibulum ac justo id risus bibendum varius a quis sapien. Vestibulum dapibus ornare lacus, eu venenatis nibh tincidunt eget. Cras efficitur tempus ligula, sed cursus odio interdum a.</CardText>
          <Button className="card-btn">Read more</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card1;