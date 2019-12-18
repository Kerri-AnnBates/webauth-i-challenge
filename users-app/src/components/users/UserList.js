import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

function UserList() {

   useEffect(() => {
      axios.get('http://localhost:5000/api/users')
         .then(res => {
            console.log(res);
         })
         .catch(err => {
            console.log('Users error:', err);
         })
   }, []);

   return (
      <div>
         <Container>
            <h1>Users</h1>
         </Container>
      </div>
   )
}

export default UserList
