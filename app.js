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



app.post('/sendMail' , (req,res)=>{


  console.log('req.body' , req.body);
console.log(req.body.email_type)


mailer.use('compile' , hbs({
  // partialsDir: 'views/header',
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'views/header',
  },
  viewPath : 'views/'+req.body.email_type ,
  extname  : '.hbs'
}))

  mailer.sendMail( {
    from: 'Admin name <invitation-do-not-reply@interwork.com> ',
    to: 'babita@interwork.biz',
    subject: req.body.subject,
    template: 'email',
    context: {
      superHeading:req.body.superHeading ,
      message:req.body.message,
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