import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
// import { rootReducer } from './reducer';
// import { INITIAL_STATE, IAppState } from './state';
import { TodoActions, epic } from './app.actions';
import { createEpicMiddleware } from 'redux-observable';
import { FormsModule } from '@angular/forms';
import { rootReducer,INITIAL_STATE, IAppState } from './reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
     FormsModule
  ],
  providers: [TodoActions ],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
     );
  }
 }
