import React  from 'react'
import Search from './Search';


export default function ObjectwaysProducts(props) {
    const { addToCart ,OW_Products} = props;
    return (
        <>
            <Search OW_Products={OW_Products} addToCart={addToCart} />
        </>
    )

}
