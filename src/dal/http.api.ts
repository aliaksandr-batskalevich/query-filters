import {AllUsersResponse, UserResponse} from "../models/response/users.response";
import {instance} from "./http.instance";
import {FilterKeys} from "../queryFilters/models/FilterKeys";

export class HttpApi {
    static getUsers(params?: Record<FilterKeys, string[]>): Promise<AllUsersResponse> {
        return instance.get<AllUsersResponse>(`users`, {params}).then(response => response.data);
    }

    static getUser(userId: string): Promise<UserResponse> {
        return instance.get<UserResponse>(`users/${userId}`).then(response => response.data);
    }
}