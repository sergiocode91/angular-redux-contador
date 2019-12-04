import { Action } from '@ngrx/store'

export const INCREMENTAR =  '[Contador] Implementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET =  '[Contador] Reset';

export class incrementarAction implements Action {
	readonly type = INCREMENTAR;
}

export class decrementarAction implements Action {
	readonly type =  DECREMENTAR;
}

export class multiplicaAction implements Action {
	readonly type = MULTIPLICAR;
	constructor( public payload: number ) {}
}

export class dividirAction implements Action {
	readonly type = DIVIDIR;
	constructor( public payload: number ) {}
}

export class resetAction implements Action {
	readonly type = RESET;
	constructor( public payload: number ) {}
}

export type actions = incrementarAction | decrementarAction | multiplicaAction | dividirAction | resetAction;