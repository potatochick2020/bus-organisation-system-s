const router = require("express").Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

router.post("/sendEmail", async (req, res) => {
    console.log("test");
    try {
        /*
        const newMember = new Member({
            Fname: req.body.Fname,
        });
        */

        var mailOptions = {
            from: req.body.from,//'youremail@gmail.com',
            to: req.body.to, //'myfriend@yahoo.com',
            subject: req.body.subject, //'Sending Email using Node.js',
            text: req.body.text //'That was easy!'
        };
        
        var transporter = nodemailer.createTransport({
            service: req.body.service, //'gmail',
            auth: {
              user: 'youremail@gmail.com',
              pass: 'yourpassword'
            }
          });
        
      res.status(200).json(newMember);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;