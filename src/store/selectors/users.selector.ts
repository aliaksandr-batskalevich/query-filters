import {RootState} from "../store";
import {IUser} from "../../models/IUser";

export const getUsers = (state: RootState): IUser[] => state.users.users;
export const getIsUsersFetching = (state: RootState): boolean => state.users.isUsersFetching;