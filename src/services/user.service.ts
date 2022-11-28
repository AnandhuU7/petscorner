import axios, { AxiosResponse } from "axios";
import { ILoginCreds, IUser } from "../types/users.types";

export function loginUser(creds: ILoginCreds){
    return axios.post<IUser>("http://localhost:5000/login", creds);
}
export function registrationUser(user: IUser){
return axios.post<IUser>("http://localhost:5000/users", user);
}