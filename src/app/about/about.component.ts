import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { MdInput } from '@angular/material';

// import { moment } from 'moment/moment';

import * as moment from 'moment';
import 'moment/locale/ru';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  now = moment().format('LLLL');
  obj = moment().toObject();



  formQuestion: FormGroup;
  formValue;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.formQuestion = fb.group({
      name: fb.group({
        first: ['Nancy', Validators.minLength(2)],
        last: 'Drew',
      }),
      email: '',
    });
  }

  ngOnInit() {
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
  }


}
