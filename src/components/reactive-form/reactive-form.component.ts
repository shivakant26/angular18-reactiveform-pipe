import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
myform : FormGroup = new FormGroup({
    username : new FormControl("",[Validators.required,Validators.minLength(4)]),
    password : new FormControl("",[Validators.required,Validators.minLength(6)])
})


handleSubmit(){
  console.log(this.myform.value)
}
}
