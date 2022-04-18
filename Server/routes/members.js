const router = require("express").Router();
const Member = require("../models/Member");

//UPDATE
router.post("/add", async (req, res) => {
    try {
        const newMember = new Member({
            name: req.body.name,
            email: req.body.email,
        });
     const member = await newMember.save();
      res.status(200).json(newMember);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;