import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES_REQUEST:
      return {...state, items: [], loading: true, error: null, };
    case GET_SERVICES_SUCCESS:
      const { items } = action.payload;
      return {...state, items, loading: false, error: null, };
    case GET_SERVICES_FAILURE:
      const { error } = action.payload;
      return {...state, items:[], loading: false, error, };
    default:
      return state;
  }
}