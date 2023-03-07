// import {  Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
function NavBar2() {
  const [result, setresult] = useState([]);
  const [name,setName]=useState("")

  useEffect(() => {

    const getUsers = async () => {
      let res = await fetch("http://localhost:8080/getUser");
      res = await res.json();
      setresult(res.data);
      

    };
    getUsers();
  }, []);

 const change = async(e)=>{
  try{

let name =(e.target.textContent)
let res = await fetch (`http://localhost:8080/getIdByName?name='${name}'`)
res= await res.json();
console.log(res);
setName(res.data)
}catch(err){
    console.log(err.message)
  }
  };
  return (
    <div className="nav">
      <h1 className="user">users List</h1>
      <ul>
        <li>name</li>
      </ul>
      {result &&
        result.length > 0 &&
        result.map((list, index) => {
          return (
            <ul className="navbar3" key={index}>
              <li><a href="#" onClick={change}>{list.name}</a></li>
            </ul>
          );
        })}
    </div>
  );
}
export default NavBar2;
