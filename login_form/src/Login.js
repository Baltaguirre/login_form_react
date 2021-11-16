import { useState, useEffect } from 'react'

import './App.css';

function Login() {

const [input, setInput] = useState({
  user:"",
  password:""
})
const [error, setError] = useState('');

const handleChange = (e) => {
e.preventDefault();
 const { name, value } = e.target;
setInput({
  ...input, 
  [name]: value
}) 
};



const handleSubmit = (e) => {
e.preventDefault();
alert('form submiteado!')
setInput({ 
  user: "",
  password: ""
})
} ; 





  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
       <div>
         <input 
         name="user" 
         type="text"
         value={input.user}
         onChange={handleChange}
         placeholder="ingrese usuario" 
         />
       </div>
       <div>
         <input 
         name="password" 
         type="password"
         value={input.password}
         onChange={handleChange}
         placeholder="ingrese contraseña" 
         />
       </div>
      </form>
      <button onClick={handleSubmit}/>
    </div>
  );
}

export default Login;
