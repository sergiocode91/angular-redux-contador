import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { incrementarAction, decrementarAction } from './contador/contador.actions';
import { AppStore } from './app.reducer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	contador: number;

	constructor( private store: Store<AppStore> ){
		// this.contador =  10;
		this.store.select('contador')
			.subscribe( contador => this.contador = contador );
	}

	incrementar() {
		// this.contador ++;
		// const accion: Action = {
		// 	type: 'INCREMENTAR'
		// };
		const accion = new incrementarAction();
		this.store.dispatch(accion);
	}

	decrementar() {
		// this.contador --;
		// const accion: Action = {
		// 	type: 'DECREMENTAR'
		// };
		const accion = new decrementarAction();
		this.store.dispatch(accion);
	}
}
