const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    Fname: {
        type: String,
        required: true,
        unique: false,
    },
    Mname: {
        type: String,
        required: false,
        unique: false,
    },
    Lname: {
        type: String,
        required: true,
        unique: false,  
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        unique: false,
    },
    Dob:{
        type: Date,
        required: true,
        unique: false,
    },
    Address: {
        type: String,
        required: true,
        unique: false,
    },
    Postcode: {
        type: String,
        required: true,
        unique: false,
    },
    pphonenum: {
        type: String,
        required: true,
        unique: false,
    },
    sphonenum: {
        type: String,
        required: true,
        unique: false,
    },
    concessionaryfee:{
        type:Boolean,
        required:true,
        unique:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);