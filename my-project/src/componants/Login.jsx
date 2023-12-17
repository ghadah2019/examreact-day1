import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [info, setinfo] = useState([])
    const navigate = useNavigate()
    const [message, setmessage] = useState('')


    useEffect(() => {

        axios.get("https://fakestoreapi.com/users")
     .then ((response)=>{
        console.log(response);
        setinfo(response.data)
     })
     
    }, [])
    
   const logBtn = () => {
    if(userName === "" || password === "") {
        setmessage("fill the empty fields")
    }
    else {

        const user = info.find((item => item.userName === email && item.password === password))
        if(user) {
        navigate("/")
    localStorage.setItem("userName", user.userName)
    localStorage.setItem("userImage", user.userImage)
    localStorage.setItem("id", user.id)
    window.location.reload(false);
        }
        else {
            setmessage("incorrect")
        }
    }

   
   }


 


  return (
    <div className='w-[100%] flex flex-col justify-center items-center' >
           <img className='w-[8rem] h-[5rem]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" />


        <div className='flex flex-col border border-[#d6d0d0] w-[24%] h-[30rem] justify-around'>
        <p>Your name</p>
        <input className='border border-[gray] m-[1rem]' type="text" name="" id="" placeholder='Enter Your Name' value={userName} onChange={(e)=>setuserName(e.target.value)} />
       
       <p>Password</p>
        <input className='border border-[gray] m-[1rem]' type="password" placeholder='Enter the password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <p>do you have account ?</p>
   

    <button  className='bg-[#FFD815] h-[2rem] w-[20rem] rounded-xl ' onClick={logBtn}>login</button>
  
            <p>
                {message}
            </p>
        
    </div>
    </div>
  )
}

export default Login






