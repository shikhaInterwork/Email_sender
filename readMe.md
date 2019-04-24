<ul>npm packages used :-</ul>
<li>a) nodemailer</li>
<li>b) nodemailer-express-handlebars </li>
<li>c) bodyParser </li>
<li>d) express </li>


 All the templates are rendered by handlebars template engine  (https://handlebarsjs.com/)


Total number of Email templates -  5 (Five)
The following are the name of templates :-
 a) Confirmation_Email
 b) Invitation_Email
 c) Rejection_Email
 d) ResetPassword_Email
 e) Welcome_Email


The application is running on port 3000

Name of route or endpoint -  /sendMail (http://localhost:3000/sendMail)

The body of the endpoint (/sendMail) :-

a) In case of  Welcome Email
{
	"email_type" :"Welcome_Email",
 	"subject" :"Subject of Welcome Mail" ,
    "username":"jim@123",
    "password" :'1234agdf'
    "brandname" : "BrandABC" ,
    "link"      : "interwork.biz"

  }

b) In case of Invitation Email

 {	"email_type" :"Invitation_Email",
 	"subject" :"subject of Invitation Email" ,
 	"admin_name":"admin(name)",
	"brandname" : "BrandABC" ,
	"link":"interwork.biz"
 }

c) In case of Confirmation Email

 {	"email_type" :"Confirmation_Email",
 	"subject" :" subject of confirmation Email" ,
 	"brandname" : "BrandABC"
 }

d) In case of  ResetPassword Email

 {	"email_type" :"ResetPassword_Email",
 	"subject" :"subject of  ResetPassword Email" ,
 	"link": "interwork.biz",
 	"username" :"username" ,
	"brandname" : "BrandABC"
 }

e) In case of Rejection Email

 {	"email_type" :"Rejection_Email",
 	"subject" :" subject of Rejection Email" ,
	"username" :"username" ,
	"brandname" : "BrandABC"
 }

