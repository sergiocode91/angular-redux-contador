import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/app.reducer';
import { multiplicaAction, dividirAction } from '../contador.actions';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styles: []
})
export class HijoComponent implements OnInit {

	contador: number;
 
	constructor( private store: Store<AppStore> ) { }

	ngOnInit() {
		this.store.select('contador')
			.subscribe( contador => {
				this.contador = contador;
			})
	}

	multiplicar() {
		const accion = new multiplicaAction(2);
		this.store.dispatch(accion);
	}

	dividir() {
		const accion = new dividirAction(2);
		this.store.dispatch(accion);
	}

	resetNieto( nuevoContador ) {
		this.contador = nuevoContador;
	}

}
