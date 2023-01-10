import { createContext, ReactNode } from "react";

export type GlobalProps = {
    children : ReactNode
}

export type dataType = {
    data : string,
    setData: (newState: string) => void;
}

export const initializeValue ={
    data : "olá",
    setData: () =>{}
}

export const GlobalContext = createContext<dataType>(initializeValue);
