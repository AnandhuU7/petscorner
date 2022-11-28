import { createContext } from "react";
import { usePersist } from "../hooks/usePersist";
import { IUser } from "../types/users.types";

export interface IGlobalContext {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

interface IProps {
    children?: React.ReactNode;
}

const globalContextData: IGlobalContext = {
    user: null,
    setUser: (user: IUser | null) => {},
};

export const GlobalContext = createContext<IGlobalContext>(globalContextData);

export function GlobalContextProvider({ children }: IProps) {
    const [user, setUser] = usePersist<IUser | null>("loggedin-user", null);

    return <GlobalContext.Provider value={{ user, setUser }}>{children}</GlobalContext.Provider>;
}
