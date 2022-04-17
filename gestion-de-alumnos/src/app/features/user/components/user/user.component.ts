import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

export interface Countries {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  nUser!: User;
  formCreateUser: FormGroup;

  options: string[] = [
    'Alemania',
    'Belgica',
    'Croacia',
    'Dinamarca',
    'España',
    'Francia',
  ];

  constructor(public form: FormBuilder, private userServ: UserService) {
    this.formCreateUser = this.form.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastname1: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastname2: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dni: new FormControl('', [
        Validators.pattern('[0-9]{8}[A-Z]'),
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[6][0-9]{8}$'),
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      anotherPhone: new FormControl('', [
        Validators.pattern('[6][0-9]{8}$'),
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{5}'),
      ]),
      locality: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  addUser() {
    if (!this.formCreateUser.valid) {
      if (
        this.formCreateUser.get('password')?.value !=
        this.formCreateUser.get('repeatPassword')?.value
      ) {
        alert('Las contraseñas no coinciden');
      } else {
        alert('Algunos campos no son válidos');
      }
      return;
    } else {
      this.nUser = new User(
        this.formCreateUser.get('name')?.value,
        this.formCreateUser.get('lastname1')?.value,
        this.formCreateUser.get('lastname2')?.value,
        this.formCreateUser.get('email')?.value,
        this.formCreateUser.get('dni')?.value,
        this.formCreateUser.get('phone')?.value,
        this.formCreateUser.get('anotherPhone')?.value,
        this.formCreateUser.get('country')?.value,
        this.formCreateUser.get('province')?.value,
        this.formCreateUser.get('postalCode')?.value,
        this.formCreateUser.get('locality')?.value,
        this.formCreateUser.get('nickname')?.value
      );
      const oldData = this.userServ.getUsers() || [];
      oldData.push(this.nUser);
      localStorage.setItem('Alumnos', JSON.stringify(oldData));
    }
  }
}
