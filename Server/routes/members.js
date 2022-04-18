const router = require("express").Router();
const Member = require("../models/Member");

//add
router.post("/add", async (req, res) => {
    console.log("test");
    try {
        const newMember = new Member({
            Fname: req.body.Fname,
            Mname: req.body.Mname,
            Lname: req.body.Lname,
            email: req.body.email,
            gender: req.body.gender,
            Address: req.body.Address,
            Postcode: req.body.Postcode,
            pphonenum: req.body.pphonenum,
            sphonenum: req.body.sphonenum,
            concessionaryfee: req.body.concessionaryfee,
            Dob: req.body.Dob,
        });
      const member = await newMember.save();
      res.status(200).json(newMember);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Get all member

router.get("/getAll", async (req, res) => {
    try {
      let members;
      members = await Member.find();
      
      res.status(200).json(members);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 module.exports = router;