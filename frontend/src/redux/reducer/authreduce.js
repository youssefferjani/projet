import { CURRENT, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes";

const initialState = {
  client: {},
};

const authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, client: payload.clients };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, client: payload.clients };
    case CURRENT:
      return { ...state, client: payload.client };
    case LOGOUT:
      localStorage.removeItem("token");

      return { ...state, client: null };
    default:
      return state;
  }
};
export default authreducer;