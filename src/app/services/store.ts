export class Todo {
  completed: Boolean;
  editing: Boolean;

  private _id: number;
  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value.trim();
  }

  get id(): number{
    return this._id;
  }

  set id(id: number){
    this._id = id;
  }

  constructor(id: number = null, title: string = '', completed: boolean= false, editing: boolean= false) {
    this.completed = completed;
    this.editing = editing;
    this.title = title.trim();
    this.id = id;
  }
}

export class TodoStore {
  public todos: Array<Todo>;

  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
    // Normalize back into classes
    this.todos = persistedTodos.map((todo: { _title: string, completed: Boolean }) => {
      let ret = new Todo(this.todos.length + 1, todo._title);
      ret.completed = todo.completed;
      return ret;
    });
  }

  private updateStore() {
    localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
  }

  private getWithCompleted(completed: Boolean) {
    return this.todos.filter((todo: Todo) => todo.completed === completed);
  }

  all() {
    return this.todos;
  }

  allCompleted() {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(completed: Boolean) {
    this.todos.forEach((t: Todo) => t.completed = completed);
    this.updateStore();
  }

  removeCompleted(): void {
    this.todos = this.getWithCompleted(false);
    this.updateStore();
  }

  getRemaining(): Array<Todo> {
    return this.getWithCompleted(false);
  }

  getCompleted(): Array<Todo> {
    return this.getWithCompleted(true);
  }

  getById(id: number): Todo{
    return null;
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
    this.updateStore();
  }

  removeById(id: number){
    this.updateStore();
  }

  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }

  add(title: string) {
    this.todos.push(new Todo(this.todos.length + 1, title));
    this.updateStore();
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.updateStore();
  }

  updateTodo(id: number, title: string): Todo{
    const todo: Todo = this.getById(id);
    todo.title = title;
    this.updateStore();
    return todo;
  }

}
