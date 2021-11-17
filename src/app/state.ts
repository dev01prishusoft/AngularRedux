export interface IAppState {
  todos: ITodo[];
}
export interface ITodo {
  name: string;
  description: string;
  date: Date;
}
export const INITIAL_STATE: IAppState = {
  todos: []
};