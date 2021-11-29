// 待辦事項的資料物件模型
export class Todo {
    // 待辦事項名稱
    // memberof Todo
    private title = '';

    // 待辦事項是否完成
    // memberof Todo
    private completed = false;
    
    constructor(title:string){
        this.title = title || '';
    }

    // 此事項是否已完成
    get done(): boolean {
        return this.completed;
    }
    // 取得事項名稱
    getTitle(): string {
        return this.title;
    }

    // 切換完成狀態
    toggleCompletion(): void{
        this.completed = !this.completed;
    }

    // 是否在編輯模式
    private editMode = false;

    // 取得此事項是否在編輯模式
    get editing(): boolean {
        return this.editMode;
    }
    // 設定此事項是否可編輯
    set editable(bl:boolean) {
        this.editMode = bl;
    }

    // 設定事項名稱
    setTitle(title: string) {
        this.title = title;
    }
}
