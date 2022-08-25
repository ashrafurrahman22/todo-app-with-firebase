import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
            <div class="navbar px-28 bg-slate-600 text-white">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2  shadow rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            Todo-App
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex"></div>
        <div class="navbar-end lg:flex hidden">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            
              <li>
              {user ? <button id="btn" className="btn font-medium text-white px-6 uppercase" onClick={logout} >log Out</button> :
                <Link to='/login'
            id="btn"
            className="btn font-medium text-white px-6 uppercase"
          >
            Login
          </Link> }</li>
          </ul>
          
        </div>
      </div>
    );
};

export default Navbar;