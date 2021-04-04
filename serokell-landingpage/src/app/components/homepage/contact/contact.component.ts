import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      fname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  save() {
    console.log(this.programForm.value);
  }


}
