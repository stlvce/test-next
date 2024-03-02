import { createStore } from "redux";
import crudReducer, { initialState } from "@/store/reducers";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
  return createStore(crudReducer, initialState);
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
