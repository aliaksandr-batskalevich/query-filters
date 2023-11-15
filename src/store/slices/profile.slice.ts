import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchProfile} from "../asyncActions/profile.action";

interface ProfileState {
    isProfileFetching: boolean;
    profile: IUser | null;
    error: string;
}

const initialState: ProfileState = {
    isProfileFetching: true,
    profile: null,
    error: '',
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchProfile.pending.type]: (state) => {
            state.isProfileFetching = true;
            state.profile = null;
            state.error = '';
        },
        [fetchProfile.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.profile = action.payload;
            state.error = '';
            state.isProfileFetching = false;
        },
        [fetchProfile.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isProfileFetching = false;
        },
    },
});