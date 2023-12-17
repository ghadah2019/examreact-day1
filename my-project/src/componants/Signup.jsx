import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [namemsg, setnamemsg] = useState('')
    const [passwordmsg, setpasswordmsg] = useState('')
    const [emaialmsg, setemaialmsg] = useState('')
    const [msg, setmsg] = useState('')
    const navigae = useNavigate()

    const registerBtn = () => {

        if (userName === "" || email === "" || password === "") {
            setmsg("please fill the empty fields")


        }
        else if (userName.length < 4) {
            setnamemsg("the name should be more than 4 characters")

        }
        else if (password.length < 6) {
            setpasswordmsg("the password should be more than 6")
            
        }

         else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
             setemaialmsg("please enter valid email")

        }
        else {
            axios.post("https://fakestoreapi.com/users",{
                userName:userName,
                email:email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                navigae("/Login")
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        

    }
  return (
    <div className='w-[100%] flex flex-col justify-center items-center' >
           <img className='w-[8rem] h-[5rem]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" />


        <div className='flex flex-col border border-[#d6d0d0] w-[24%] h-[30rem] justify-around'>

     
       
       <h1 className='text-2xl font-bold'>Create an account</h1>
       <p className='font-bold'>Your name</p>
        <input className='border border-[gray] m-[1rem]' type="text" name="" id="" placeholder='Enter Your Name' value={userName} onChange={(e)=>setuserName(e.target.value)} />
        <p className='font-bold'>Mobile number or email</p>
        <input className='border border-[gray] m-[1rem]' type="text" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)} />
       <p className='font-bold'>Password</p>
        <input className='border border-[gray] m-[1rem]' type="password" placeholder='Enter the password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <p className='font-bold'>do you have account ?</p>

       
       <Link to = "/Login">
       <button className='bg-[#FFD815] h-[2rem] w-[20rem] rounded-xl'>Login</button>
       </Link>
       
       <button className='bg-[#FFD815] h-[2rem] w-[20rem] rounded-xl' onClick={registerBtn}>SignUp</button>

    </div>
    </div>
  )
}

export default Signup
