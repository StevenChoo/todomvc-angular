import {TestBed, inject} from '@angular/core/testing';
import {Todo, TodoStore} from "../../../src/app/services/store";

describe('TodoStore', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStore]
    });
  });

  it('should ...', inject([TodoStore], (store: TodoStore) => {
    expect(store).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoStore], (store: TodoStore) => {
      expect(store.all).toEqual([]);
    }));

    it('should return all todos', inject([TodoStore], (store: TodoStore) => {
      let todo1 = new Todo(0,'Hello 1', false);
      let todo2 = new Todo(1,'Hello 2', true);
      store.addTodo(todo1);
      store.addTodo(todo2);
      expect(store.all).toEqual([todo1, todo2]);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoStore], (store: TodoStore) => {
      let todo1 = new Todo(0, 'Hello 1', false);
      let todo2 = new Todo(1, 'Hello 2', true);
      store.addTodo(todo1);
      store.addTodo(todo2);
      expect(store.getById(0)).toEqual(todo1);
      expect(store.getById(1)).toEqual(todo2);
    }));
  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoStore], (store: TodoStore) => {
      let todo1 = new Todo(0, 'Hello 1', false);
      let todo2 = new Todo(1, 'Hello 2', true);
      store.addTodo(todo1);
      store.addTodo(todo2);
      expect(store.all()).toEqual([todo1, todo2]);
      store.removeById(1);
      expect(store.all()).toEqual([todo2]);
      store.removeById(2);
      expect(store.all()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoStore], (store: TodoStore) => {
      let todo1 = new Todo(0, 'Hello 1', false);
      let todo2 = new Todo(1, 'Hello 2', true);
      store.addTodo(todo1);
      store.addTodo(todo2);
      expect(store.all()).toEqual([todo1, todo2]);
      store.removeById(3);
      expect(store.all()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([TodoStore], (store: TodoStore) => {
      let todo = new Todo(0, 'Hello 1', false);
      store.addTodo(todo);
      store.updateTodo(1, 'new title');
      expect(todo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([TodoStore], (store: TodoStore) => {
      let todo = new Todo(0, 'Hello 1', false);
      store.addTodo(todo);
      let updatedTodo = store.updateTodo(2, 'new title');
      expect(updatedTodo).toEqual(null);
    }));

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([TodoStore], (store: TodoStore) => {
      let todo = new Todo(0, 'Hello 1', false);
      store.addTodo(todo);
      store.setAllTo(true);
      expect(todo.completed).toEqual(true);
      store.setAllTo(false);
      expect(todo.completed).toEqual(false);
    }));

  });

});
