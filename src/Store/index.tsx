import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
interface Idata {
  id: number;
  title: string;
  completed: boolean;
}
interface Istate {
  data: Idata[];
  status: "idle" | "loading" | "success" | "failed";
}
const initialState: Istate = {
  data: [],
  status: "idle",
};

export function apiCall() {
  return async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: "loading" });
    try {
      let result = await fetch("https://jsonplaceholder.typicode.com/todos/");
      let data = await result.json();
      dispatch({ type: "success", payload: data });
    } catch (error) {
      dispatch({ type: "failed" });
    }
  };
}

function counterReducer(state = initialState,
  action: { type: any; payload: any }) {
  switch (action.type) {
    case "loading": {
      return { data: [], status: "loading" };
    }
    case "failed": {
      return { data: [], status: "failed" };
    }
    case "success": {
      return { data: action.payload, status: "success" };
    }
  }
  return state;
}
const reducer = combineReducers({
  counterReducer,
});

const Store = createStore(reducer, applyMiddleware(thunk));
export default Store;
