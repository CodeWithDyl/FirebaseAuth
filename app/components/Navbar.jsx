import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user, googleSignIn, logOut} = UserAuth();
    const [loading, setLoading] = useState(true);
    
    const handleSignIn = async () => {
        try {
            await googleSignIn();
        }
        catch(error) {
            console.log(error);
        }
    }

    const handleSingOut = async () => {
        try {
            await logOut();
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            setLoading(false);
        };
        checkAuthentication();
     }, []);

     
  return (
     <div >
        <ul className='flex'>
            <li class='p-2 cursor-pointer'>
                <Link href='/'>Home</Link>
            </li>
            <li class='p-2 cursor-pointer'>
                <Link href='/about'>About</Link>
            </li>
            {!user ? null : (   
            <li class='p-2 cursor-pointer'>
                <Link href='/profile'>Profile</Link>
            </li>
            )}
        </ul>

        {loading ? null : !user ? (
        <ul className='flex'>
            <li onClick={handleSignIn} className ='p-2 cursor-pointer'>
                Login
            </li>
            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                Sign Up
            </li>
        </ul>
        ) : (
        <div>
            <p>Welcome, {user.displayName}</p>
<p class="cursor-pointer" onClick={handleSingOut} >Sign out</p>
        </div>
            )}

        
     </div>
  )
}

export default Navbar