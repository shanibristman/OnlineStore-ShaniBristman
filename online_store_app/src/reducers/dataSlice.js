import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_KEY = 'GevAS1AAdErEBrfFTPJF1SteZnctlINW'

export const fetchProducts = createAsyncThunk('data/fetchProducts', async (_, thunkAPI) => {

    const response = await axios.get(`https://tinyurl.com/vht7ah2`);

    console.log("🚀 ~ fetchProducts ~ response:", response)
    return response.data;

});


export const fetchSearchData = createAsyncThunk('data/searchData', async (text) => {
    // const response = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`);
    // return response.data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {

        products: [],
        statusProducts: "idle",
        errorProducts: null,

        currentProduct: {},
        statusCurrentProduct: "idle",
        errorCurrentProduct: null,

        search: {},
        statusSearch: "idle",
        errorSearch: null,

        darkMode: false

    },
    reducers: {

        changeProduct: (state, Product) => {
            state.products = Product.payload;
        },
        changeDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.statusProducts = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.statusProducts = 'succeeded';
                state.products = action.payload;

            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.statusProducts = 'failed';
                state.errorProducts = action.error.message;
            })

            .addCase(fetchSearchData.pending, (state) => {
                state.statusSearch = 'loading';
            })
            .addCase(fetchSearchData.fulfilled, (state, action) => {
                state.statusSearch = 'succeeded';
                state.search = action.payload;
            })
            .addCase(fetchSearchData.rejected, (state, action) => {
                state.statusSearch = 'failed';
                state.errorSearch = action.error.message;
            })
    },
});

export const { changeProduct, changeDarkMode } = dataSlice.actions;
export default dataSlice.reducer;
