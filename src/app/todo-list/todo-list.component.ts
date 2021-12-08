import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-todo-items';
import { IToDoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDoItem: IToDoItem = {
    id: 1,
    name: "Start Bitrix project",
    isCompleted: false
  }
  selectedItem: IToDoItem;
  items: IToDoItem[] = ITEMS;

  onSelect(item: IToDoItem): void {
    this.selectedItem = item;
  } 
  remove(itemToRemove: IToDoItem): void {
    this.items = this.items.filter(i => i !== itemToRemove);
    if (this.items.length == 0) this.selectedItem = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
