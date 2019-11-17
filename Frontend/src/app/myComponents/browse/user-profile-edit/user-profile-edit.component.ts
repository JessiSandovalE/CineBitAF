import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-userprofileedit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
  ) { }

  userForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  })
  ngOnInit() {
  }

}
