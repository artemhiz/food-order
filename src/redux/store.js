import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishes-slice';

export const store = configureStore({
    reducer: {
        dishes,
    }
})