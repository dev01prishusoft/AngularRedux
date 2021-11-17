import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';
import { Observable} from 'rxjs';
// import { ajax } from 'rxjs/observable/dom/ajax'; 
import { ajax } from 'rxjs/ajax';
const fetchListFulfilled = (payload:any) => ({
    type: TodoActions.FETCH_LIST_FULFILLED, 
    todos: payload
  });

export const epic = (action:any) =>
  action.ofType(TodoActions.FETCH_LIST)
    .mergeMap((action:any) => 
    ajax.getJSON('https://www.mocky.io/v2/5a421404300000fe0c709d12')
        
    )

@Injectable()
export class TodoActions {
  static ADD_TODO = 'ADDTODO';
  static REMOVE_TODO = 'REMOVETODO';
  static FETCH_LIST = 'FETCHLIST';
  static FETCH_LIST_FULFILLED = 'FETCHLIST_FULFILLED';

  fetchList() {
    return { type: TodoActions.FETCH_LIST };
  }

  addTodo(name: string, description: string): AnyAction {
    return { type: TodoActions.ADD_TODO, name, description, date: new Date()};
  }

  removeTodo(index: number): AnyAction {
    return { type: TodoActions.REMOVE_TODO, index };
  }
}