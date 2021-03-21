import { createAction, props } from '@ngrx/store';

export type filtrosVarios = 'todos' | 'completados' | 'pendientes';

export const filtrar = createAction(
    '[Filtro] set Filtro',
    props<{filtro: filtrosVarios}>()
);