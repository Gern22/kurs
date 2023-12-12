import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContextProvider';

const ForYou = () => {
  const {user} = useContext(UserContext);

  // useEffect(() => {
  //   //TODO sorted movies by userContext.user.preferences
  //   // and add which movies are recommended to FilteredMovies
  //   // sorted by rating
  //   // const somelist = userContext.user ? userContext.user.preferences : []
  //   setFilteredMovies(movies);
  //   // movies.map((m) => ({
  //   //   ...m,
  //   //   isRecommended: somelist.includes(m.genres[0])
  //   // }))
  // }, [movies]);

  return (
        <div>
            <h2>{user ? 'For You Page' : 'Please login to see ad some text'}</h2>
        </div>
    );
};

export default ForYou;
