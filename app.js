const nodemailer = require("nodemailer");
const cred =require('./cred/cred')
var hbs = require('nodemailer-express-handlebars');
const express=require('express');
const app= express();
const bodyParser=require('body-parser')


//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


var mailer = nodemailer.createTransport({
  host :'smtp.gmail.com' ,
  port :465,
  secure:true,
  auth:{
    user:cred.email,
    pass:cred.pass
  }
})


mailer.use('compile' , hbs({

  viewEngine: {
    extName: '.hbs',
    partialsDir: 'views/header',
  },
  viewPath : 'views/' ,
  extname  : '.hbs'
}))


// route or endpoint to send mail

app.post('/sendMail' , (req,res)=>{

console.log('req.body' , req.body);
console.log(req.body.email_type)
console.log(req.body.password)


// checking the number of params for Invitation_Email
if( req.body.email_type ==='Invitation_Email' ){

console.log(req.body.length)

let count=Object.keys(req.body).length;
if(count < 4){
  res.send({
    "success" :false ,
    "message" :"Insufficient information"
  })
}else{
  sendMail(req ,res )
}


}

// checking the number of params for Welcome_Email
else if( req.body.email_type ==='Welcome_Email' ){

console.log(req.body.length)

let count=Object.keys(req.body).length;
if(count < 6){
  res.send({
    "success" :false ,
    "message" :"Insufficient information"
  })
}
else{
  sendMail(req ,res )
}


}

// checking the number of params for Confirmation_Email
else if( req.body.email_type ==='Confirmation_Email' ){

console.log(req.body.length)

let count=Object.keys(req.body).length;
if(count < 3){
  res.send({
    "success" :false ,
    "message" :"Insufficient information"
  })
}else{
  sendMail(req ,res )
}


}

// checking the number of params for ResetPassword_Email
else if( req.body.email_type ==='ResetPassword_Email' ){

console.log(req.body.length)

let count=Object.keys(req.body).length;
if(count < 5){
  res.send({
    "success" :false ,
    "message" :"Insufficient information"
  })
}else{
  sendMail(req ,res )
}


}

// checking the number of params for Rejection_Email
else if( req.body.email_type ==='Rejection_Email' ){

console.log(req.body.length)

let count=Object.keys(req.body).length;
if(count < 4){
  res.send({
    "success" :false ,
    "message" :"Insufficient information"
  })
}else{
  sendMail(req ,res )
}


}


} )


 // function to send mail
sendMail =(req,res)=>{


  mailer.sendMail( {
    from: 'Admin name <invitation-do-not-reply@interwork.com> ',
    to: req.body.receiver,
    subject: req.body.subject,
    template: req.body.email_type + '/email',
    context: {
      brandname:req.body.brandname,
      link:req.body.link,
      username:req.body.username,
      password:req.body.password ,
      admin_name:req.body.admin_name

    }
 },(err, response)=>{

  if(err){
    console.log(err)
    res.send('Email not sent !')
  }else{
    res.send("Mail sent !")
  }
 })

}


// app running on port 3000
app.listen('3000' ,()=>{
  console.log('app running successfully on port 3000')
})