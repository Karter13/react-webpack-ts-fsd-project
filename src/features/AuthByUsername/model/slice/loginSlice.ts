import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state: LoginSchema) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, (state: LoginSchema) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state: LoginSchema, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
