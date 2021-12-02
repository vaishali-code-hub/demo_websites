import React from 'react';

export default function Basket(props) {

    const { cart, addToCart, removeFromCart, OW_Products } = props;
    const productsPrice_WithSameHandle = OW_Products.find(product => (
        (product.Handle !== '' && product['Variant Price'] !== '')
    )
    )
    const productsTitle_WithSameHandle = OW_Products.find(product => (
        (product.Handle !== '' && product.Title !== '')
    )
    )

    let itemPrice = cart.reduce((sum, currentItem) => {
        return currentItem['Variant Price'] === '' ? sum + productsPrice_WithSameHandle['Variant Price'] * currentItem.qty : sum + currentItem['Variant Price'] * currentItem.qty;
    }, 0);


    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;


    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {
                    cart.length === 0 && <div>Empty</div>}</div>
            {
                cart.map((item) => (
                    <div className="row">
                        <div className="col-2 text.left">{(item.Title === '') ? productsTitle_WithSameHandle.Title : item.Title}</div>
                        <div className="col-2">
                            <button onClick={() => addToCart(item)}>+</button>
                            <button onClick={() => removeFromCart(item)}>-</button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x {(item['Variant Price'] === '') ? productsPrice_WithSameHandle['Variant Price'] : item['Variant Price']}
                        </div>
                        <hr></hr>
                    </div>
                ))
            }
            {
                cart.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2 text.left" >Items Price</div>
                            <div className="col-2 text-right"> {itemPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2 text.left">Tax Price</div>
                            <div className="col-2 text-right"> {taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2 text.left">shippingPrice Price</div>
                            <div className="col-2 text-right"> {shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2 text.left">Total Price</div>
                            <div className="col-2 text-right"> {totalPrice.toFixed(2)}</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <button onClick={() => alert('implement checkout')}>checkout </button>
                        </div>
                    </>)
            }
        </aside>

    );
}
