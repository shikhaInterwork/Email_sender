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
  // partialsDir: 'views/header',
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'views/header',

  },
  viewPath : 'views/email' ,
  extname  : '.hbs'
}))


app.post('/sendMail' , (req,res)=>{

  console.log('req.body' , req.body);


  mailer.sendMail( {
    from: 'belleSolutions2018@gmail.com',
    to: 'babita@interwork.biz',
    subject: req.body.subject,
    template: 'email',
    context: {
      superHeading:req.body.superHeading ,
      subHeading:req.body.subHeading ,
      footerNote:req.body.footerNote ,
      link:req.body.link

    }
 },(err, response)=>{

  if(err){
    console.log(err)
    res.send('bad email')
  }else{
    res.send("good email")

  }

 })




} )


app.listen('3000' ,()=>{
  console.log('app running successfully on port 3000')
})