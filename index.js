const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

require('dotenv').config();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Contact endpoint
app.post('/api/form', (req, res)=>{
    console.log(req.body);

    const output = ` 
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>First Name: ${req.body.firstName}</li>
    <li>Last Name: ${req.body.lastName}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    ` ;

    let transporter = nodemailer.createTransport(smtpTransport({
        service: "gmail",
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
       
    }));


    let mailOptions = {
        from:'chaninaround4yt@gmail.com', //sender
        to:'chaninaround4yt@gmail.com', //receiver
        subject:'Sweet Tooth Contact Submission',
        html:output //created in step 1
    };

    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            return console.log(error);
        }else{
            console.log('Success')
        }
    })

});

const port = process.env.PORT||5000;
app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})