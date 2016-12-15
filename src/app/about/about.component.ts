import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Todo} from '../models/todo';
import {TodoService} from '../services/todo.service';

import * as moment from 'moment';
import 'moment/locale/ru';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [TodoService]
})
export class AboutComponent implements OnInit {

    now = moment().format('LLLL');
    obj = moment().toObject();

    items:Todo[] = [];

    formQuestion:FormGroup;
    formValue;

    constructor(@Inject(FormBuilder) fb:FormBuilder, private todoService:TodoService) {
        this.formQuestion = fb.group({
            // name: fb.group({
            //     first: '',
            //     last: '',
            // }),
            // email: ''
            todoTest: '',
            name: '',
            dateTodo: ''
        });
    }

    ngOnInit() {
        this.generateMoment();
        this.items = this.todoService.getData();
    }
    generateMoment() {
        console.log('moment', this.now);
        console.log(moment.locale()); // en
        moment.locale('ru');
        console.log(moment.locale()); // en
        console.log('moment', this.now);
        console.log('object', this.obj);
    }
    onSubmit() {
        this.formValue = this.formQuestion.value;
        console.log('formValue', this.formValue);
        this.todoService.addDate(this.formValue.todoTest, this.formValue.name, this.formValue.dateTodo);
    }
}
