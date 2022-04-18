import React from 'react'

import Table from 'react-bootstrap/Table';



import {
  useState,
  useEffect
} from "react";
import {
  Link
} from "react-router-dom";
import axios from "axios";

/*
    Fname: req.body.Fname,
    Mname: req.body.Mname,
    Lname: req.body.Lname,
    email: req.body.email,
    gender: req.body.gender,
    Address: req.body.Address,
    Postcode: req.body.Postcode,
    pphonenum: req.body.pphonenum,
    sphonenum: req.body.pphonenum,
    concessionaryfee: req.body.concessionaryfee,
    Dob: req.body.Dob,
*/

function Member({member}){
    return(
        <tr>
            <td>{member.Fname}</td>
            <td>{member.Mname}</td>
            <td>{member.Lname}</td>
            <td>{member.email}</td>
            <td>{member.gender}</td>
            <td>{member.Address}</td>
            <td>{member.Postcode}</td>
            <td>{member.pphonenum}</td>
            <td>{member.sphonenum}</td>
            <td>{member.Dob}</td>
            <td>{member.concessionaryfee}</td>
        </tr>
    )
}

function MembersTable (){

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
        const res = await axios.get("/members/getAll");
        console.log("here");
        console.log(res.data);
        setMembers(res.data);
        };
        fetchMembers();
    });

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Postcode</th>
                    <th>Primary Phone No.</th>
                    <th>Second Phone No.</th>
                    <th>Dob</th>
                    <th>Concessionary Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((p) => (
                        <Member member={p} />
                    ))}

                
                </tbody>
            </Table>
        </div>
    );
}

export default MembersTable;
