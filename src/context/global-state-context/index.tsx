"use client";

import { createContext, useReducer, ReactNode, Dispatch } from "react";
import {
  globalReducer,
  initialState,
  GlobalState,
  Action,
} from "./globalReducer";

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
