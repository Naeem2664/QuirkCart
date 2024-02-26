import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchWomensProducts,fetchMensProducts } from '../apis/productAPI';

/* const initialState = {
  products: [],
  isLoading: false,
  error: null,
};
 */

export const fetchMensProductsThunk = createAsyncThunk(
  'mansProducts/fetchMansProducts',
  async () => await fetchMensProducts()
);

export const fetchWomensProductsThunk = createAsyncThunk(
    'womensProducts/fetchMansProducts',
    async () => await fetchWomensProducts()
  );
const productsSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMensProductsThunk.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMensProductsThunk.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(fetchMensProductsThunk.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(fetchWomensProductsThunk.pending,(state=>{
            state.status="loading"
        }))
        .addCase(fetchWomensProductsThunk.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.products=action.payload
        })
        .addCase(fetchWomensProductsThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
    },
  });
  
  export default productsSlice.reducer;
/* 
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products += action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;

 */










/* import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { fetchAllProducts } from '../apis/productAPI'

const initialState={
    products:[],
    status:'idle'
}
export const fetchAllProductsAsync=createAsyncThunk(
    'product/fetchAllProducts',
    async()=>{
        const response=await fetchAllProducts()
        //This will return all the product from json sever
        console.log(response.data)
        return response.data
        
    }
)

export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProductsAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchAllProductsAsync.fulfilled,(state,action)=>{
            state.status='idel'
            state.products +=action.payload
        })
    }
})
export const productReducer=productSlice.reducer */