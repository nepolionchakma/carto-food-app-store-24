import { useCarto } from '@/Context/CartContext';
import React from 'react';

const LogIn = () => {
    const { users } = useCarto();
    // console.log(users?.map(, 're');
    return (
        <div>
            {
                users.map(item => console.log(item.userType))
            }
            <form action="">
                <input type="text" />
                <input type="password" />
                <button type="submit">LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;