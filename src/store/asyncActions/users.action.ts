import {createAsyncThunk} from "@reduxjs/toolkit";
import {HttpApi} from "../../dal/http.api";
import {FilterKeys} from "../../models/queryKeys/FilterKeys";
import {errorProcessing} from "../../utils/errorProcessing/errorProcessing";

export const fetchUsers = createAsyncThunk(
    `users/fetchAll`,
    async (searchParams?: Record<FilterKeys, string[]>) => {
        try {
            const response = await HttpApi.getUsers(searchParams);
            return response.data;
        } catch (e) {
            return errorProcessing(e);
        }
    }
);