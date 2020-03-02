/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import {TodoApp} from "../../../src/app/app.component";
import {Todo, TodoStore} from "../../../src/app/services/store";

describe('AppComponent', () => {
  let fixture;
  let app: TodoApp;
  let todoStore: TodoStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodoApp
      ],
      providers: [
        TodoStore
      ]
    });
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoApp);
    app = fixture.debugElement.componentInstance;
    todoStore = fixture.debugElement.injector.get(TodoStore);
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have a newTodo todo`, async(() => {
    expect(typeof app.newTodoText === 'string').toBeTruthy()
  }));

  it('should display "Todos" in h1 tag', async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('todos');
  }));

  it('should add a todo when text is not empty', async(() => {
    spyOn(todoStore, 'add');
    app.newTodoText = 'new todo';
    app.addTodo();
    expect(todoStore.add).toHaveBeenCalled();
  }));

  it('should not add a todo when text is empty', async(() => {
    spyOn(todoStore, 'add');
    app.addTodo();
    expect(todoStore.add).toHaveBeenCalledTimes(0);
  }));

  it('should complete a todo', async(() => {
    spyOn(todoStore, 'toggleCompletion');
    app.toggleCompletion(new Todo());
    expect(todoStore.toggleCompletion).toHaveBeenCalled();
  }));

  it('should remove a todo', async(() => {
    spyOn(todoStore, 'remove');
    app.remove(new Todo());
    expect(todoStore.remove).toHaveBeenCalled();
  }));
});
