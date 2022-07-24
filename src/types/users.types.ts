export interface IUser {
    name: string;
    email: string;
    password: string;
    gender: string;
    phonenumber: string;
    address: string;
    isAdmin?: boolean;
}
export interface ILoginCreds {
    email: string;
    password: string;
}
