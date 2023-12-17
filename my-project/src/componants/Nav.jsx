import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    const [usern, setUsern] = useState(localStorage.getItem("userName"));
  
    
    const logout = () => {

        localStorage.clear();
        setUsern(null);
        setImg(null);
        window.location.reload(false);
    }

    return (
        <div>
          <ul className='flex w-[100%] h-[3rem] bg-[#FFD815]  justify-between'>

         {usern ? (
            <li  onClick={logout}> logout</li>
         ) : (

            <Link to = "/Login">
            <li>
                login
            </li>

            </Link>
         )}

         {usern && (
            <>

                <p>{usern}</p>
         
       
            </>

         
         )}

         <Link to="/">
         <li>Home</li>
         </Link>
        
               <Link to="/Signup">
               <li>
                signup
               </li>
               
               </Link>
          </ul>

        </div>
    );
}

export default Nav;


