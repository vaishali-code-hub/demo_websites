import React from 'react';

export default function Header(props) {
    const { countCartItems } = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1> Modern Store</h1>
                </a>
            </div>
            <div>
                <a href="#/cart" > Cart {' '}
                    {
                        countCartItems ? (
                            <button className="itemCount">{countCartItems} </button>) : (' ')
                    }
                </a> <a href="#/signin"> SignIn </a>
            </div>
        </header>
    );
}
