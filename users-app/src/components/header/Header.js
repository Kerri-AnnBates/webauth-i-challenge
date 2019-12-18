import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from 'reactstrap';
import axios from 'axios';

function Header() {

   function logOut() {
      axios.get('http://localhost:5000/api/logout')
         .then(res => {
            console.log(res);
         })
         .catch(err => {
            console.log("Log out", err);
         })
   }
   return (
      <div>
         <header>
            <Container className="themed-container">
               <nav>
                  <Link exact='true' to='/'>Home</Link>
                  <Link to='/login'>Login</Link>
                  <Link to='/users'>Users</Link>
                  <Link to='/register'>Register</Link>
                  <Button onClick={logOut}>Logout</Button>
               </nav>
            </Container>
         </header>
      </div>
   )
}

export default Header;