import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
} from '../actions/actionTypes';

const initialState = { item: {}, loading: false, error: null, };

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {...state, item: {}, loading: true, error: null, };
    case GET_ITEM_SUCCESS:
      const { item } = action.payload;
      return {...state, item, loading: false, error: null, };
    case GET_ITEM_FAILURE:
      const { error } = action.payload;
      return {...state, item: {}, loading: false, error, };
    default:
      return state;
  }
}