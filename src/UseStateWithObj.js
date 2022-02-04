/*
    https://react-hooks-cheatsheet.com/usestate

     You have to pass the entire object to the useState updater function as the object is replaced NOT merged.
     This is unlike class.
     
*/

import React, { useState } from 'react';

const UseStateWithObj = () => {
    let [user, setUser] = useState({
        firstName: 'john',
        lastName: 'smith'
    });

    return (
        <div>
            <input type="text" onChange={ e => setUser({...user, firstName: e.target.value})} placeholder='First Name'/>
            <input type="text" onChange={ e => setUser({...user, lastName: e.target.value})} placeholder='Last Name' />
            {JSON.stringify(user)}
        </div>
    );
}

export default UseStateWithObj;

