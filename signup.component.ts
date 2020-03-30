import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators, FormBuilder,FormArray, NgForm, RequiredValidator} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formgrp = new FormGroup({
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    cnic:new FormControl('',Validators.required),
    phone:new FormControl(''),
    address:new FormControl('',Validators.required),
    
    password:new FormControl('',Validators.required),
   
      });





onSubmit(){
  // console.log(this.formgrp.get('address').value);
  console.log(this.formgrp.value);
  this.formgrp.reset();
  alert('You Are Signup Successfuly');

}


  constructor() { }

  ngOnInit(): void {
  }

}
