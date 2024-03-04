import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { ICar } from "@/types/types";
import { State } from "@/types/redux";
import { CREATE, DELETE, EDIT } from "@/store/actions";
import { ACTION_SERVER_ACTION } from "next/dist/client/components/router-reducer/router-reducer-types";

export const initialState: State = {
  cars: [],
};

const crudReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action };

    case CREATE:
      let id: number =
        state.cars.length !== 0 ? state.cars[state.cars.length - 1].id + 1 : 0;

      const newCar: ICar = {
        ...action.payload,
        id,
      };
      return { ...state, cars: [...state.cars, newCar] };
    case EDIT:
      if (state.cars.find((car) => car.id === action.payload.id)) {
        return {
          ...state,
          cars: [
            ...state.cars.filter((car) => car.id !== action.payload.id),
            action.payload,
          ].sort((a, b) => a.id - b.id),
        };
      }

      return state;

    case DELETE:
      return {
        ...state,
        cars: [
          ...state.cars.filter((car) => car.id !== Number(action.payload)),
        ],
      };
    default:
      return state;
  }
};

export const createCar = (payload: ICar) => ({ type: CREATE, payload });
export const editCarInfo = (payload: ICar) => ({ type: EDIT, payload });
export const deleteCar = (payload: number) => ({ type: DELETE, payload });
export default crudReducer;
