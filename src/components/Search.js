import React from 'react';

export default function Search(props) {
  const { OW_Products, addToCart } = props;

  const [searchedArray, setSearchedArray] = React.useState(OW_Products);
  const [searchString, setSearchString] = React.useState("");
  const searchedObjects = [];
  const productsPrice_WithSameHandle = OW_Products.find(product => (
    (product.Handle !== '' && product['Variant Price'] !== '')
  )
  )
  const productsTitle_WithSameHandle = OW_Products.find(product => (
    (product.Handle !== '' && product.Title !== '')
  )
  )

  React.useEffect(() => {
    if (searchString.length === 0) {
      setSearchedArray(OW_Products)
    } else {
      const searchedObjects = []

      OW_Products.map((singleProductObject) => {
        if ((singleProductObject.Title.toLowerCase().includes(searchString.toLowerCase()))) {
          searchedObjects.push(singleProductObject)
          return;
        } else if ((singleProductObject['Variant SKU'].toLowerCase().includes(searchString.toLowerCase()))) {
          OW_Products.filter
            (
              (productWithSKU) => {
                if (productWithSKU.Handle === singleProductObject.Handle)
                  searchedObjects.push(productWithSKU)
              }
            )
          return;
        }
      })
      setSearchedArray(searchedObjects)
    }
  }, [searchString])

  return (
    <div className="App">
      <p>
        <input size="50"
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Enter Product Name or SKU.."
        />

      </p>
      <pre className="displayGrid">
        {
          searchedArray.map(product => (
            <div>
              <div className="card">
                <div className="product-image">
                  <img src={product['Image Src']} className="product-thumb small" alt="" />
                  <button class="card-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
                <div class="product-info">
                  <h3 class="product-short-des ">{(product.Title !== '') ? product.Title : productsTitle_WithSameHandle.Title}</h3>
                  <span class="price"></span>
                  <span class="actual-price">${product['Variant Price'] !== "" ? product['Variant Price'] : productsPrice_WithSameHandle['Variant Price']}

                  </span>

                </div>
              </div>

            </div>
          )
          )
        }
      </pre>
    </div>
  );
}
