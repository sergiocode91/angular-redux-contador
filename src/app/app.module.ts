import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { contadorReducer } from './contador/contador.reducer';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	StoreModule.forRoot({ contador: contadorReducer }),
	StoreDevtoolsModule.instrument({
		maxAge: 25, // Retains last 25 states
		logOnly: environment.production, // Restrict extension to log-only mode
	}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
