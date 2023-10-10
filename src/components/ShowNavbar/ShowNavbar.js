import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

const ShowNavbar = ({children}) => {

    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        if(location.pathname === "/sign-in" || location.pathname === "/sign-up"){
            setShowNavbar(false);
        }else{
            setShowNavbar(true);
        }
    }, [location])

  return (
    <>
      {showNavbar && children}
    </>
  );
}

export default ShowNavbar;
