import { createSlice } from "@reduxjs/toolkit";
import { getBannersList, getCategoriesList, getCategoryRecommendedList, getCategoryRecommendedProducts, getClothes, getProductOffersList, getProductRecommendedList, getSmartphones } from "../actions/homeActions";
import { buildBuilder } from '../../utils/helpers';

const initialState = {
    categories: {
        list: [],
        loading: false
    },
    banners: {
        list: [],
        loading: false
    },
    productsRecommended: {
        list: [],
        loading: false
    },
    productOffers: {
        list: [],
        loading: false
    },
    categoryRecommended: {
        list: [],
        loading: false
    },
    categoryRecommendedProducts: {
        list: [],
        loading: false
    },
    smartphones: {
        list: [],
        loading: false
    },
    clothes: {
        list: [],
        loading: false
    }
}

const homeSlice = createSlice({
    name: 'Home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        buildBuilder(builder, getCategoriesList, 'categories')
        buildBuilder(builder, getBannersList, 'banners')
        buildBuilder(builder, getProductRecommendedList, 'productsRecommended')
        buildBuilder(builder, getProductOffersList, 'productOffers')
        buildBuilder(builder, getCategoryRecommendedList, 'categoryRecommended')
        buildBuilder(builder, getCategoryRecommendedProducts, 'categoryRecommendedProducts')
        buildBuilder(builder, getSmartphones, 'smartphones')
        buildBuilder(builder, getClothes, 'clothes')
    }
})

export default homeSlice.reducer

