import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TodoStore} from "./services/store";
import {TodoApp} from "./app.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TodoApp
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [TodoStore],
  bootstrap: [TodoApp]
})
export class AppModule {
}
