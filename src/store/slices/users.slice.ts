import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../asyncActions/users.action";

interface UsersState {
    isUsersFetching: boolean;
    users: IUser[];
}

const initialState: UsersState = {
    isUsersFetching: true,
    users: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersFetching(state: UsersState, action: PayloadAction<boolean>) {
            state.isUsersFetching = action.payload;
        },
        setUsers(state: UsersState, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        }
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isUsersFetching = true;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<{ users: IUser[], totalCount: number }>) => {
            state.users = action.payload.users;
            state.isUsersFetching = false;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isUsersFetching = false;
        },
    }
})