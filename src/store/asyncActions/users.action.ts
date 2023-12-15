import {createAsyncThunk} from "@reduxjs/toolkit";
import {HttpApi} from "../../dal/http.api";
import {FilterKeys} from "../../queryFilters/models/FilterKeys";
import {errorProcessing} from "../../utils/errorProcessing/errorProcessing";
import {FilterPart} from "../../queryFilters/models/FilterState";

export const fetchUsers = createAsyncThunk(
    `users/fetchAll`,
    async (searchParams?: FilterPart) => {
        try {
            const response = await HttpApi.getUsers(searchParams);
            return response.data;
        } catch (e) {
            return errorProcessing(e);
        }
    }
);