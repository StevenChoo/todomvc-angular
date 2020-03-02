import {Todo} from "../../../src/app/services/store";

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo(0,'hello', true);
    expect(todo.id).toEqual(0);
    expect(todo.title).toEqual('hello');
    expect(todo.completed).toEqual(true);
  });
});
