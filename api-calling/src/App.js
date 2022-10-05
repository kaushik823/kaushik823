// import './App.css';
// import React, { useState, useEffect } from 'react';
// const axios = require('axios')
// function App() {

//   const [name,setname] = useState("");

//   const getdata =()=>{
//     axios.post('http://localhost/phpcall/demo.php',{name:name})
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   }
  
//   return (
    
//     <div className="App">
      
//       <input type="text" onChange={(e) => {setname(e.target.value)}}></input>
//       <input type="button" value="Click Here" onClick={getdata}></input>
//     </div>
//   );
// }
// export default App;










import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
function App() {
  return (
    <div className="App">
      <h5>React CRUD operations using PHP API and MySQL</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;