import React, { useState } from 'react';
import { useCarto } from '../Context';

const Details = () => {
    const [cart, setCart] = useState([])
    const str = 'cart food'
    const { carts, addCart } = useCarto()
    const add = () => {
        addCart({ str, id: Date.now() })
    }
    console.log(carts);
    return (
        <div>
            <span>
                {
                    carts.map((i) => <p key={i.id}>{i.str}</p>)
                }
            </span>
            <button onClick={add}>add</button>
        </div>
    );
};

export default Details;