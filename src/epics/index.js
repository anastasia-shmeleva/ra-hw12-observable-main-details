import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map,
  mergeMap,
  catchError
} from 'rxjs/operators';
import { 
  GET_SERVICES_REQUEST,
  GET_ITEM_REQUEST,
} from '../actions/actionTypes'
import {
  getServicesSuccess,
  getServicesFailure,
  getItemSuccess,
  getItemFailure,
} from '../actions/actionCreators';

export const getServicesEpic = (action$) => action$.pipe(
  ofType(GET_SERVICES_REQUEST),
  mergeMap(() => ajax.getJSON(`http://localhost:7070/api/services`).pipe(
      map(response => getServicesSuccess(response)),
      catchError((e) => of(getServicesFailure(e))),
  )),
);

export const getItemEpic = (action$) => action$.pipe(
  ofType(GET_ITEM_REQUEST),
  map((o) => o.payload.id),
  mergeMap((o) => ajax.getJSON(`http://localhost:7070/api/services/${o}`).pipe(
      map(response => getItemSuccess(response)),
      catchError((e) => of(getItemFailure(e))),
  )),
);
