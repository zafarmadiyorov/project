/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function ProductDescription({product}) {
    return (
        <div>
            <p className="tab-menu__description">
              {product.desc}
            </p>
        </div>
    )
}

export default ProductDescription