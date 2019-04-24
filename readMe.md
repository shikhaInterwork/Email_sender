npm packages used :-
<ol  type="a">
<li> nodemailer</li>
<li> nodemailer-express-handlebars </li>
<li> bodyParser </li>
<li> express </li>
</ol>

<p>
 All the templates are rendered by handlebars template engine  (https://handlebarsjs.com/)
</p>

<b> Total number of Email templates -  5 (Five) </b>

The following are the name of templates :-
<ol  type="a">
 <li> Confirmation_Email </li>
  <li> Invitation_Email  </li>
  <li> c) Rejection_Email  </li>
 <li> d) ResetPassword_Email  </li>
   <li>e) Welcome_Email  </li>
</ol>

<p> The application is running on port 3000 </p>

<b> Name of route or endpoint -  /sendMail (http://localhost:3000/sendMail)
</b>
<b>
The body of the endpoint (/sendMail) :-
</b>
<ol type="a">

<li>
a) In case of  Welcome Email
<code>
{
	"email_type" :"Welcome_Email",
 	"subject" :"Subject of Welcome Mail" ,
    "username":"jim@123",
    "password" :'1234agdf'
    "brandname" : "BrandABC" ,
    "link"      : "interwork.biz"

  }
</code>
 </li>
 <li>
b) In case of Invitation Email
<code>
 {	"email_type" :"Invitation_Email",
 	"subject" :"subject of Invitation Email" ,
 	"admin_name":"admin(name)",
	"brandname" : "BrandABC" ,
	"link":"interwork.biz"
 }
</code>
</li>
<li>
c) In case of Confirmation Email
<code>
 {	"email_type" :"Confirmation_Email",
 	"subject" :" subject of confirmation Email" ,
 	"brandname" : "BrandABC"
 }
 </code>
</li>
<li>
d) In case of  ResetPassword Email
<code>
 {	"email_type" :"ResetPassword_Email",
 	"subject" :"subject of  ResetPassword Email" ,
 	"link": "interwork.biz",
 	"username" :"username" ,
	"brandname" : "BrandABC"
 }
</code>
 </li>
<li>
e) In case of Rejection Email
<code>
 {	"email_type" :"Rejection_Email",
 	"subject" :" subject of Rejection Email" ,
	"username" :"username" ,
	"brandname" : "BrandABC"
 }
 </code>
</li>
</ol>
