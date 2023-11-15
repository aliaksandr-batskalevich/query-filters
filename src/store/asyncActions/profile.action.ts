import {createAsyncThunk} from "@reduxjs/toolkit";
import {HttpApi} from "../../dal/http.api";
import {errorProcessing} from "../../utils/errorProcessing/errorProcessing";

export const fetchProfile = createAsyncThunk(
    `profile/fetch`,
    async (userId: string, thunkApi) => {
        try {
            const response = await HttpApi.getUser(userId);
            return response.data.user;
        } catch (e) {
            return thunkApi.rejectWithValue(errorProcessing(e));
        }
    }
);