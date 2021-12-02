import React  from 'react';
import Search from './Search';

export default function Main(props) {
    const { addToCart, OW_Products } = props;
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="col-2"></div>
            <div className="col-1">
                <Search OW_Products={OW_Products} addToCart={addToCart} />
            </div>
        </main>

    );


}
