import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.reducer';
import { resetAction } from '../contador.actions';

@Component({
	selector: 'app-nieto',
	templateUrl: './nieto.component.html',
	styles: []
})
export class NietoComponent implements OnInit {

	contador: number;

	constructor( private store: Store<AppStore> ) { }

	ngOnInit() {
		this.store.select('contador')
			.subscribe( contador => {
				this.contador = contador;
			})
	}

	reset() {
		const accion = new resetAction(0);
		this.store.dispatch(accion);
	}

}
