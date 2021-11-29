import { Injectable } from '@angular/core';
// class
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  // 存放待辦事項
  private list: Todo[] = [];

  constructor() { }

  // 取得清單
  getList():Todo[]{
    return this.list;
  }

  // 新增事項
  add(title: string){
    if(title || title.trim()){
      this.list.push(new Todo(title));
    }
  }

  // 移除事項
  remove(index: number):void {
    this.list.splice(index, 1);
  }
  
  // 取得已完成/未完成清單
  // {boolean} completed --用布林值取得已完成或未完成的清單
  getWithCompleted(completed: boolean):Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }
}
