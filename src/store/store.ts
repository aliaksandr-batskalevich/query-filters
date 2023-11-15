import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./slices/users.slice";
import {profileSlice} from "./slices/profile.slice";

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    profile: profileSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type  AppStore = typeof store;
export type  AppDispatch = AppStore['dispatch'];
