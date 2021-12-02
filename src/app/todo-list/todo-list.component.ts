import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-todo-items';
import { ToDoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDoItem: ToDoItem = {
    id: 1,
    name: "Start Bitrix project",
    isCompleted: false
  }
  selectedItem: ToDoItem;
  items: ToDoItem[] = ITEMS;

  onSelect(item: ToDoItem): void {
    this.selectedItem = item;
  } 
  remove(itemToRemove: ToDoItem): void {
    this.items = this.items.filter(i => i !== itemToRemove);
    if (this.items.length == 0) this.selectedItem = null;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
