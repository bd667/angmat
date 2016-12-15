import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable()
export class TodoService {

    private data: Todo[] = [
        {todoTest: "qwerty", name: "test", dateTodo: "123456"},
        {todoTest: "asdfgh", name: "test", dateTodo: "123456"}
    ];

    constructor() {
    }

    getData() {
        return this.data;
    }

    addDate(todoTest:string, name:string, dateTodo:string) {
        this.data.push(new Todo(todoTest, name, dateTodo));
    }

}
