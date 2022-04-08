import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  formCreateUser: FormGroup;

  constructor(public form:FormBuilder) {
    this.formCreateUser = this.form.group({
      name : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastname1 : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastname2 : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      dni : new FormControl('', [Validators.pattern('/^[0-9]{8}[A-Z]$ | [A-Va-w][0-9]{7}[0-9A-Ja]$/g'),Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      phone : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      anotherPhone : new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      country : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      province : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      postalCode : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      locality : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      nickname :  new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword : new FormControl('', [Validators.required, Validators.minLength(8)]),

    })
   }

  ngOnInit(): void {
  }

   ngAfterViewInit(): void {

  }


  addUser() {
    if (!this.formCreateUser.valid) {
      alert("Algunos campos no son válidos");
      return;
    }
    else{
      /* this.nuevoUser = new User(this.formCreateUser.get("name")?.value,
      this.formCrear.get("surnameFormControl")?.value,this.formCrear.get("emailFormControl")?.value,
      this.formCrear.get("passFormControl")?.value);
      this.listaUser?.addUser(this.nuevoUser); */
    }
  }
}
