const nodemailer = require("nodemailer");
const cred =require('./cred/cred')
var hbs = require('nodemailer-express-handlebars');
const express=require('express');
const app= express();


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


app.get('/sendMail' , (req,res)=>{


  mailer.sendMail( {
    from: 'belleSolutions2018@gmail.com',
    to: 'babita@interwork.biz',
    subject: 'Test',
    template: 'email',
    context: {
      superHeading:'Ranbaxy powered by Intermed' ,
      subHeading:'kindly click on the link below to register yourself !' ,
      footerNote:'If the link above does not work , try copying and pasting the URL into your browser.If you continue to have problems , please feel free to contact us at support@intermedranbaxy.com ' ,
      link:'interwork.biz'

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