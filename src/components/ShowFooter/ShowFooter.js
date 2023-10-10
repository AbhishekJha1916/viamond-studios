import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

const ShowFooter = ({children}) => {
    const location = useLocation();

    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        if(location.pathname === "/sign-in" || location.pathname === "/sign-up"){
            setShowFooter(false);
        }else{
            setShowFooter(true);
        }
    }, [location])

  return (
    <>
      {showFooter && children}
    </>
  );
}

export default ShowFooter;
