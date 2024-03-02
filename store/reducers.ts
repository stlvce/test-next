import { ICar } from "@/types/types";
import { CREATE, EDIT, DELETE } from "@/store/actions";

type CrudState = {
  cars: ICar[];
};

export const initialState: CrudState = {
  cars: [],
};

export default function crudReducer(state = initialState, action: any) {
  switch (action.type) {
    case CREATE:
      return { ...state, cars: [...state.cars, action.payload] };
    case EDIT:
      return { ...state };
    case DELETE:
      return { ...state };
    default:
      return state;
  }
}

export const createCar = (payload: ICar) => ({ type: CREATE, payload });
export const editCar = () => ({ type: EDIT });
export const deleteCar = () => ({ type: EDIT });
