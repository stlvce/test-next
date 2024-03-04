import {createStore, Store} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import {State} from "@/types/redux"
import crudReducer from "@/store/reducers/crudReducer";

const makeStore = (context: Context) => createStore(crudReducer);

export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});