import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:"learn angular",
        completed:false
      },
      {
        content:"learn react",
        completed:true
      },
      {
        content:"Practice guitar",
        completed:false
      }
    ]
  }

  toggleDone(id:number):void{
    this.todos.map((value,index) => (index == id) ? value.completed = !value.completed: "")
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((value,index) => index != id);
  }

  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });
    this.inputTodo = ""
  }
}
