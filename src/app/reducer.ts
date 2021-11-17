import { AnyAction } from 'redux';
import { TodoActions } from './app.actions';


export interface ITodo {
  name: string;
  description: string;
  date: Date;
}
export interface IAppState {      // state that we
  todos: ITodo[];                 // defined earlier
}
export const INITIAL_STATE: IAppState = {
  todos: []
};

export  function rootReducer(lastState: any, action: AnyAction): IAppState {
  switch(action.type) {
    case TodoActions.ADD_TODO: 
      return { 
        todos: [ 
          ...lastState.todos,
          {
            name: action.name, 
            description: action.description, 
            date: action.date
          }
        ] 
      };
    case TodoActions.REMOVE_TODO:
      return {
        todos: [
          ...lastState.todos.slice(0, action.index), 
          ...lastState.todos.slice(action.index + 1)
        ]
      };
  }
  return lastState;
}