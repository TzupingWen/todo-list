import { Component, OnInit } from '@angular/core';
// service
import { TodoListService } from './todo-list.service';
// class
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit(): void {
  }

  // 新增待辦事項
  // {HTMLInputElement} --InputRef輸入框的元素實體
  addTodo(inputRef: HTMLInputElement): void {
    // console.log(inputRef.value);
    // inputRef.value = '';

    const todo = inputRef.value.trim();
    if(todo){
      this.todoListService.add(todo);
      inputRef.value = '';
    }

  }

  // 取得待辦清單
  // returns {Todo[]}
  getList(): Todo[]{
    return this.todoListService.getList();
  }

  // 移除待辦事項
  // index {number} --待辦事項的索引位置
  remove(index: number){
    this.todoListService.remove(index);
  }

  // 編輯待辦事項
  edit(todo: Todo){
    todo.editable = true;
  }
  // 更新待辦事項
  update(todo:Todo, newTitle:string) {

    if (!todo.editing){
      return;
    }
    
    const title = newTitle.trim();
    // 若有輸入名稱則修改
    if(title){
      todo.setTitle(title);
      todo.editable = false;

      // 沒有輸入則刪除該項
    } else{
      const index = this.getList().indexOf(todo);
      if(index !== -1){
        this.remove(index);
      }
    }

  }

  // 取消編輯狀態
  cancelEditing(todo: Todo){
    todo.editable = false;
  }

  // 取得未完成的待辦清單
  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }
}
