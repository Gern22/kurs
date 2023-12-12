import React, { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';

const ForYou = () => {
  const {user} = useContext(UserContext);

    return (
        <div>
            <h2>{user ? 'For You Page' : 'Please login to see ad some text'}</h2>
        </div>
    );
};

export default ForYou;
