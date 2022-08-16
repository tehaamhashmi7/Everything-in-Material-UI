import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function TableComponent() {

    const data = [{
        "id": 1,
        "first_name": "Wolfgang",
        "last_name": "Axelbey",
        "email": "waxelbey0@skype.com",
        "gender": "Male",
        "ip_address": "161.103.66.9"
      }, {
        "id": 2,
        "first_name": "Teodoro",
        "last_name": "Kolak",
        "email": "tkolak1@topsy.com",
        "gender": "Male",
        "ip_address": "255.11.108.27"
      }, {
        "id": 3,
        "first_name": "Teddie",
        "last_name": "Peppard",
        "email": "tpeppard2@slideshare.net",
        "gender": "Female",
        "ip_address": "255.149.167.239"
      }, {
        "id": 4,
        "first_name": "Constantin",
        "last_name": "Driver",
        "email": "cdriver3@wix.com",
        "gender": "Male",
        "ip_address": "4.196.185.194"
      }, {
        "id": 5,
        "first_name": "Etti",
        "last_name": "Trippitt",
        "email": "etrippitt4@symantec.com",
        "gender": "Female",
        "ip_address": "114.199.168.109"
      }, {
        "id": 6,
        "first_name": "Zachery",
        "last_name": "Spellworth",
        "email": "zspellworth5@elegantthemes.com",
        "gender": "Male",
        "ip_address": "129.244.75.26"
      }, {
        "id": 7,
        "first_name": "Darcey",
        "last_name": "Galvan",
        "email": "dgalvan6@comsenz.com",
        "gender": "Female",
        "ip_address": "19.166.229.7"
      }, {
        "id": 8,
        "first_name": "Sumner",
        "last_name": "Titmuss",
        "email": "stitmuss7@purevolume.com",
        "gender": "Male",
        "ip_address": "45.65.123.74"
      }, {
        "id": 9,
        "first_name": "Juana",
        "last_name": "Osborne",
        "email": "josborne8@bloglines.com",
        "gender": "Female",
        "ip_address": "246.117.202.247"
      }, {
        "id": 10,
        "first_name": "Ring",
        "last_name": "Saylor",
        "email": "rsaylor9@hp.com",
        "gender": "Male",
        "ip_address": "207.190.199.177"
      }]

  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email Address</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(row => {
                    return (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TableComponent