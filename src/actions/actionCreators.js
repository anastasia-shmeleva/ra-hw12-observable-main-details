import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
} from './actionTypes';

export const getServicesRequest = () => ({
  type: GET_SERVICES_REQUEST, payload: {}
});

export const getServicesSuccess = items => ({
  type: GET_SERVICES_SUCCESS, payload: { items },
});

export const getServicesFailure = error => ({
  type: GET_SERVICES_FAILURE, payload: { error },
});

export const getItemRequest = id => ({
  type: GET_ITEM_REQUEST, payload: { id },
});

export const getItemSuccess = item => ({
  type: GET_ITEM_SUCCESS, payload: { item },
});

export const getItemFailure = error => ({
  type: GET_ITEM_FAILURE, payload: { error },
});