import { Feedback,ContactType } from './../../shared/feedback';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

   feedbackForm : FormGroup;
   feedback : Feedback;
   contactType = ContactType;

  constructor(private formBuilder : FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {

  this.feedbackForm = this.formBuilder.group({

    firstname: '',
    lastname: '',
    telnum: 0,
    email: '',
    agree: false,
    contacttype: 'None',
    message: ''

  });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
