import { createReducer, on } from '@ngrx/store';
import { filtrar, filtrosVarios } from './filtro.actions';
 
export const initialState: filtrosVarios =  'todos';
 
const _filtroReducer = createReducer(
  initialState,
  on(filtrar, (state: filtrosVarios, { filtro }) =>  filtro)
);
 
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}