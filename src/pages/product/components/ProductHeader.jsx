/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { MessageSmallIcon, BasketIcon, StarIcon } from '../../../assets/icons'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../store/slices/cart'
import { addFavorite } from '../../../store/slices/favorite'

// eslint-disable-next-line react/prop-types
function ProductHeader({ product }) {
    const dispatch = useDispatch()
    // eslint-disable-next-line react/prop-types
    const [activeImage, setActiveImage] = useState(product.mainImage)

    const handleAdd = () => {
        dispatch(addCart(product))
    }

    console.log(product)

    const handleAddOrder = () => {
        dispatch(addFavorite(product))
    }

    const handleImage = (image) => {
        setActiveImage(image)
    }

    return (
        <div className='product-header'>
            <div className="container">
                <div className="product-header__wrapper">
                    <div className="product-header__image image-wrapper">
                        <div className="image-main">
                            <img src={activeImage} alt={product?.title} />
                        </div>
                        <div className="image-list">
                            {
                                product.images.map((item, key) => (
                                    <button
                                        className={`image-list__item ${item === activeImage ? 'image-list__item_active' : ''}`}
                                        key={key}
                                        onClick={() => handleImage(item)}
                                    >
                                        <img src={item} alt={product?.title} />
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <div className="product-header__content content__product-header">
                        <h3 className="content-title">
                            {product?.title}
                        </h3>
                        <div className="content-row">
                            <div className="content-row__col">
                                <div className="content-stars">
                                    <div className="content-stars__list">
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                    </div>
                                    <span className="content-stars__title">{product?.rating}</span>
                                </div>
                            </div>

                            <div className="content-row__col">
                                <span className="content-row__icon">
                                    <MessageSmallIcon />
                                </span>
                                <span className="content-row__text">{product?.reviewCount} reviews</span>
                            </div>

                            <div className="content-row__col">
                                <span className="content-row__icon">
                                    <BasketIcon />
                                </span>
                                <span className="content-row__text">{product?.sold} sold</span>
                            </div>
                        </div>

                        <div className="content-price">
                            <p className="content-price__old">{product?.oldPrice?.toLocaleString()} сум</p>
                            <p className="content-price__new">{product?.price?.toLocaleString()} сум</p>
                        </div>

                        <ul className="content-list">
                            <li className="content-list__item">
                                <strong className="content-list__text">Бренд:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">{product?.brand?.title}</span>
                            </li>
                            <li className="content-list__item">
                                <strong className="content-list__text">Модель:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">{product?.model}</span>
                            </li>
                            <li className="content-list__item">
                                <strong className="content-list__text">Наличии:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">В наличии</span>
                            </li>
                        </ul>

                        <div className="content-buttons">
                            <button className="content-button content-button__primary" onClick={handleAdd}>
                                Add cart
                            </button>
                            <button className="content-button content-button__secondary" onClick={handleAddOrder}>
                                Add favourite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader