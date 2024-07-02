import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../components/Header.css'

const Header = () => {
    const { loginWithRedirect,isAuthenticated,user ,logout} = useAuth0();

    // const { logout } = useAuth0();
    console.log("current user",user)
  return (
    <>
    <div className='username'>
    {
        isAuthenticated && (
            <p>{user.name}</p>
        )
     }

    </div>
   <h1>Codepen</h1>

    {
        isAuthenticated ?( <div className='logout'>
        <button
         onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          LogOut
        </button>
        </div>) :(
            <div className='login'>
            <button onClick={() => loginWithRedirect()}>Log In</button>
            
       </div>
       

    )}
    
    
   </>
  )
}

export default Header