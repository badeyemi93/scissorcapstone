import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { links } from 'Data';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; 

interface NavProps {
  scrollToView: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onSidebarOpen: () => void;
  sidebarOpen: boolean;
}

const Nav: React.FC<NavProps> = ({ scrollToView, onSidebarOpen, sidebarOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Firebase Auth
    const auth = getAuth();
    
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className='home' id='home'>
      <div className='nav-center'>
        <div className='logo'>
          <img className='logo-icon' src='./images/Logo.svg' alt='nav-logo' />
        </div>

        <ul className='nav-links'>
          {links.map((link, id) => (
            <li key={id}>
              <a
                className={`nav-link ${id === 0 ? 'primary-blue-300' : ''} `}
                href={`#${link.href}`}
                onClick={(e) => scrollToView(e, link.href)} 
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {sidebarOpen && isLoggedIn && (
          <ul className='signin-links'>
            <li>
              <button onClick={logout} className='signin-link-bg btn-blue btn'>
                Logout
              </button>
            </li>
          </ul>
        )}

        {!isLoggedIn && !sidebarOpen && (
          <ul className='signin-links'>
            <li>
              <Link to="/login" className='signin-link primary-blue-300'>
                Log in
              </Link>
            </li>
            <li>
              <a className='signin-link-bg btn-blue btn' href='#form'>
                Try for free
              </a>
            </li>
          </ul>
        )}

        {!sidebarOpen && (
          <span className='logo-btn sidebar-open-btn' onClick={onSidebarOpen}>
            <FaBars fontSize={24} color='#095cec' />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Nav;