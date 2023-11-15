import {RootState} from "../store";
import {IUser} from "../../models/IUser";

export const getProfile = (state: RootState): IUser | null => state.profile.profile;
export const getIsProfileFetching = (state: RootState): boolean => state.profile.isProfileFetching;
export const getProfileError = (state: RootState): string => state.profile.error;
