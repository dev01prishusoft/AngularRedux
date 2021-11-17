import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { TodoActions } from './app.actions';
import { IAppState, ITodo } from "./state";
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Angular Redux';
  todos: ITodo[] = []
  currentName: any;
  currentDescription: any;
  subscription;
  
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoActions) {
      this.subscription = ngRedux.select<ITodo[]>('todos')
        .subscribe(newTodos => this.todos = newTodos);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addTodo() {
    this.ngRedux.dispatch(
      this.actions.addTodo(this.currentName, this.currentDescription)
    );
  }
  removeTodo(index: number) {
    this.ngRedux.dispatch(this.actions.removeTodo(index));
  }
}
