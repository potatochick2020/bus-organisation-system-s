const router = require("express").Router();
var nodemailer = require('nodemailer');



//will receive a list of recipents email,name
router.post("/", async (req, res) => {
    console.log("test");
    try {
        /*
        const newMember = new Member({
            Fname: req.body.Fname,
        });
        */
        console.log("test here");
          var transporter = nodemailer.createTransport({
              host: "smtp.titan.email",
              port: 25,
              secure: false, // true for 465, false for other ports
              auth: {
                user: process.env.SEND_EMAIL_USERNAME, // generated ethereal user
                pass: process.env.SEND_EMAIL_PASSWORD, // generated ethereal password
              },
          });
          console.log("test here 2");
          
          //substitue [fname] by fname
          

          console.log(req.body);
          
          let count=0;
          for(var key in req.body.to) {

            let temp = req.body.html;

            for(var replacement in req.body.replacements){
              let wordtochange = req.body.replacements[replacement];
              temp=temp.replace("["+req.body.replacements[replacement]+"]", req.body[req.body.replacements[replacement]][key]);
            }
            count++;

            let info = await transporter.sendMail({
              from: req.body.from,//'"Fred Foo 👻" ',  sender address
              to: req.body.to[key],//"potatochick2020@gmail.com",  list of receivers
              subject: req.body.sub,//"Hello ✔",  Subject line
              html: temp, //"<b>Hello world?</b>",  html body
          });
          }
          
        
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;

/*
Sample data for api
{
    "from": "abc <your email>",
    "sub": "Hello ✔",
    "html": "<b>Dear [fname],</b><div>[lname] bye.</div>",
    "to":[
        "abc@gmail.com","def@gmail.com"
        ],
    "fname":[
        "fname1","fname2"
    ],
    "lname":[
        "lname1","lname2"
    ],
    "replacements":[
        "fname","lname"
    ]
}
*/

/*
Please add the following to the main ".env" file
SEND_EMAIL_PASSWORD = "yourpassword"
SEND_EMAIL_USERNAME = "yourusername"
*/